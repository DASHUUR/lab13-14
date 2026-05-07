import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  cookieStore.set("token", "logged_in");

  return Response.json({
    success: true,
  });
}