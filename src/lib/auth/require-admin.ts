import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";

export async function requireAdmin() {
  const session = await getSession();
  if (!session) {
    return {
      authorized: false as const,
      response: NextResponse.json({ error: "دسترسی غیرمجاز." }, { status: 401 }),
    };
  }

  return { authorized: true as const, session };
}
