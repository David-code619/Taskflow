"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";
import { redirect } from "next/navigation";
// import { revalidatePath, revalidateTag } from "next/cache";


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
    // revalidateTaskData(userId);
    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    console.error("Error deleting task:", error);
    return null;
  }
};
