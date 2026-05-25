"use server";
import { auth } from "../auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
// import { revalidatePath, revalidateTag } from "next/cache";
import { getTasksQuery } from "../queries/db-quries";
import { type Task } from "@/types/types";

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
    const tasks = await getTasksQuery(userId);
    console.log("Get task server action was called");
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};