"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";


export const getCompletedTaskCount = async () => {
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

    const [completeCount, completedTasks] = await prisma.$transaction([
      prisma.task.count({
        where: {
          creatorId: userId,
          status: "DONE",
        },
      }),
      prisma.task.findMany({
        where: {
          creatorId: userId,
          status: "DONE",
        },
      }),
    ]);

    return { completeCount, completedTasks };
  } catch (error) {
    console.error("Error getting task count: ", error);
  }
};
