"use server";
import { Task } from "../actions/task";
import prisma from "../prisma";
import { cacheLife, cacheTag } from "next/cache";

export const getTasksQuery = async (userId: string): Promise<Task[]> => {
  // "use cache";
  // cacheLife("hours");
  // cacheTag(`tasks-${userId}`);

  try {
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
    console.log("Get task function was called");
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
