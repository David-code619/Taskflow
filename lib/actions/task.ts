"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export interface Task {
  id?: string;
  title: string;
  description?: string | null;
  dueDate?: Date | null;
  priority: "NORMAL" | "URGENT" | "HIGH";
  status?: "TODO" | "DONE" | "ACTIVE";
}

// Zod schema for validating Task input
const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(255, "Title must be 255 characters or less"),
  description: z
    .string()
    .trim()
    .max(1000, "Description must be 1000 characters or less")
    .nullable()
    .optional(),
  dueDate: z.date().optional(),
  priority: z
    .enum(["NORMAL", "URGENT", "HIGH"])
    .refine(
      (val) => ["NORMAL", "URGENT", "HIGH"].includes(val),
      "Priority must be one of: NORMAL, URGENT, HIGH",
    ),
});

export const addTask = async (data: Task) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  try {
    const userId = session.user.id;
    if (!userId) {
      return { success: false, message: "User not authenticated" };
    }

    // Validate input using Zod schema
    const validatedData = createTaskSchema.parse({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
    });

    await prisma.task.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        creatorId: userId,
        dueDate: validatedData.dueDate,
        priority: validatedData.priority,
      },
    });
    revalidatePath("/dashboard/tasks");

    return { success: true, message: "Task added successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.issues[0]?.message || "Validation failed";
      return { success: false, message: errorMessage };
    }
    console.error("Error adding task:", error);
    return { success: false, message: "Error adding task" };
  }
};

export const getTasks = async (): Promise<Task[]> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  try {
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

export const updateTask = async (
  id: string,
  status: "TODO" | "DONE" | "ACTIVE",
) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  try {
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
    return { success: true, message: "Task updated successfully" };
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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  try {
    const userId = session.user.id;
    if (!userId) {
      return { percentage: 0, completed: 0, total: 0 };
    }
    const now = new Date();
    const currentDay = now.getDay();
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;

    const startOfWeek = new Date(now.setDate(now.getDate() + distanceToMonday));
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

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

export const deleteTask = async (id: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  try {
    const userId = session.user.id;
    if (!userId) {
      return null;
    }
    await prisma.task.delete({
      where: {
        id: id,
        creatorId: userId,
      },
    });
    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    console.error("Error deleting task:", error);
    return null;
  }
};
