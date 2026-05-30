"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
// import { revalidatePath, revalidateTag } from "next/cache";
import { type WeeklyStats } from "@/types/types";

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
    console.log("Weekly stats function was called");
    console.log(completedCount);
    return {
      percentage,
      completed: completedCount,
      total: totalCount,
    };
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to compute weekly efficiency metrics");
  }
}