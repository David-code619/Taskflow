"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: "NORMAL" | "URGENT" | "HIGH";
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
      return { success: false, message: "User not authenticated" }
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

    return {success: true, message: "Task added successfully"};
  } catch (error) {
    return { success: false, message: "Error adding task" };
  }
};
