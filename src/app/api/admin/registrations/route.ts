import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { connectMongo } from "@/lib/db/mongodb";
import { RegistrationModel } from "@/lib/db/models/registration";

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;

  try {
    await connectMongo();
    const registrations = await RegistrationModel.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ registrations });
  } catch (error) {
    console.error("Admin registrations error:", error);
    return NextResponse.json({ error: "خطای سرور." }, { status: 500 });
  }
}
