import { NextResponse } from "next/server";
import { verifyAdminCredentials } from "@/lib/auth/credentials";
import { createSession } from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = typeof body.email === "string" ? body.email : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ error: "ایمیل و رمز عبور الزامی است." }, { status: 400 });
    }

    if (!verifyAdminCredentials(email, password)) {
      return NextResponse.json({ error: "ایمیل یا رمز عبور اشتباه است." }, { status: 401 });
    }

    await createSession(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "خطای سرور." }, { status: 500 });
  }
}
