"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

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
    revalidatePath("/dashboard/tasks")

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
    });
    return tasks;

  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
