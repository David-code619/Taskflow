"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export interface Task {
  id?: string;
  title: string;
  description?: string | null;
  dueDate?: Date | null;
  priority: "NORMAL" | "URGENT" | "HIGH";
  status?: "TODO" | "DONE" | "ACTIVE";
}

export const addTask = async (data: Task) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/login");
    }
    const userId = session.user.id;
    if (!userId) {
      return { success: false, message: "User not authenticated" };
    }
    await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        creatorId: userId,
        dueDate: data.dueDate,
        priority: data.priority,
      },
    });
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "Task added successfully" };
  } catch (error) {
    console.error("Error adding task:", error);
    return { success: false, message: "Error adding task" };
  }
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/login");
    }
    const userId = session.user.id;
    if (!userId) {
      return [];
    }
    const tasks = await prisma.task.findMany({
      where: {
        creatorId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        priority: true,
        status: true,
        dueDate: true,
      },
      take: 5,
    });
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export const updateTask = async (id: string, status: "TODO" | "DONE" | "ACTIVE") => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/login");
    }
    const userId = session.user.id;
    if (!userId) {
      return null;
    }
    await prisma.task.update({
      where: {
        id: id,
        creatorId: userId,
      },
      data: {
        status: status,
      },

    });
    return {success: true, message: "Task updated successfully"};
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
};

export interface WeeklyStats {
  percentage: number;
  completed: number;
  total: number;
  // textDisplay: string;
}

export async function getWeeklyUserEfficiency(): Promise<WeeklyStats> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/login");
    }
    const userId = session.user.id;
    if (!userId) {
      return { percentage: 0, completed: 0, total: 0 };
    }
    const now = new Date();
    const currentDay = now.getDay();
    console.log("Current Day of Week:", currentDay); // 0 (Sun) to 6 (Sat)
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    console.log("Distance to Monday:", distanceToMonday); // e.g., if today is Wed (3), distance is -2

    const startOfWeek = new Date(now.setDate(now.getDate() + distanceToMonday));
    startOfWeek.setHours(0, 0, 0, 0);
    console.log("Start of Week:", startOfWeek);


    const endOfWeek = new Date(startOfWeek);
    console.log("Initial End of Week (Monday):", endOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    console.log("End of Week:", endOfWeek);

    const [completedCount, totalCount] = await prisma.$transaction([
      prisma.task.count({
        where: {
          creatorId: userId,
          status: "DONE",
          createdAt: { gte: startOfWeek, lte: endOfWeek },
        },
      }),
      prisma.task.count({
        where: {
          creatorId: userId,
          createdAt: { gte: startOfWeek, lte: endOfWeek },
        },
      }),
    ]);

    const percentage =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    console.log("Weekly Efficiency Percentage:", percentage);

    return {
      percentage,
      completed: completedCount,
      total: totalCount,
      // textDisplay: `${completedCount} / ${totalCount} tasks done`,
    };
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to compute weekly efficiency metrics");
  }
}
