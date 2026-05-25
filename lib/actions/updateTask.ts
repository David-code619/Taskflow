"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
// import { revalidatePath, revalidateTag } from "next/cache";


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
    // revalidateTaskData(userId);
    return { success: true, message: "Task updated successfully" };
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
};