import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export default async function getUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
}
