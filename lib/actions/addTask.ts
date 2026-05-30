"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
// import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { type Task } from "@/types/types";

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
    // revalidateTaskData(userId);

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
