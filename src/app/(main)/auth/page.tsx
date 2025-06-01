import { getServerSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";

export default async function Auth() {
  const session = await getServerSession();

  if (session?.administrator) return redirect("/");
  if (!session?.administrator) return redirect("/auth/login");

  return <></>;
}
