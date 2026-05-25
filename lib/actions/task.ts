"use server";
import { addTask } from "./addTask";
import { getTasks } from "./getTasks";
import { updateTask } from "./updateTask";
import { getWeeklyUserEfficiency } from "./weeklyEfficiency";
import { deleteTask } from "./deleteTask";
import { getCompletedTaskCount } from "./completedCount";


export {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  getWeeklyUserEfficiency,
  getCompletedTaskCount,
}

// const revalidateTaskData = (userId: string) => {
//   revalidateTag(`tasks-${userId}`);
//   revalidatePath("/dashboard");
//   revalidatePath("/dashboard/tasks");
// };






