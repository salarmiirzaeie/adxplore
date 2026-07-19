import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/db/mongodb";
import { RegistrationModel } from "@/lib/db/models/registration";
import { validateRegistrationPayload } from "@/lib/registration/validate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = validateRegistrationPayload(body);

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    await connectMongo();

    const { role, phone } = parsed.data;

    const existing = await RegistrationModel.findOne({ phone }).lean();
    if (existing) {
      return NextResponse.json(
        { error: "این شماره قبلاً ثبت‌نام کرده است." },
        { status: 409 },
      );
    }

    const doc =
      role === "brand"
        ? {
            role,
            phone,
            brandName: parsed.data.brandName,
            niche: parsed.data.niche,
          }
        : {
            role,
            phone,
            instagram: parsed.data.instagram,
            followers: Number(parsed.data.followers),
          };

    await RegistrationModel.create(doc);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      (error as { code?: number }).code === 11000
    ) {
      return NextResponse.json(
        { error: "این شماره قبلاً ثبت‌نام کرده است." },
        { status: 409 },
      );
    }

    console.error("Registration API error:", error);
    return NextResponse.json(
      { error: "خطای سرور. لطفاً دوباره تلاش کنید." },
      { status: 500 },
    );
  }
}
