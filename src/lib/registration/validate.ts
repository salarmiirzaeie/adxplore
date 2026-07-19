export type RegistrationRole = "brand" | "influencer";

export type RegistrationPayload = {
  role: RegistrationRole;
  phone: string;
  brandName?: string;
  niche?: string;
  instagram?: string;
  followers?: string;
  website?: string;
};

export function normalizeIranPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("98") && digits.length === 12) {
    return `0${digits.slice(2)}`;
  }
  if (digits.startsWith("9") && digits.length === 10) {
    return `0${digits}`;
  }
  return digits;
}

export function validateRegistrationPayload(
  body: unknown,
): { ok: true; data: RegistrationPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "درخواست نامعتبر است." };
  }

  const input = body as Record<string, unknown>;

  if (typeof input.website === "string" && input.website.trim()) {
    return { ok: false, error: "درخواست رد شد." };
  }

  const role = input.role;
  if (role !== "brand" && role !== "influencer") {
    return { ok: false, error: "نوع ثبت‌نام نامعتبر است." };
  }

  const rawPhone = typeof input.phone === "string" ? input.phone.trim() : "";
  const phone = normalizeIranPhone(rawPhone);
  if (!/^09\d{9}$/.test(phone)) {
    return { ok: false, error: "شماره موبایل معتبر ایران وارد کنید." };
  }

  if (role === "brand") {
    const brandName = typeof input.brandName === "string" ? input.brandName.trim() : "";
    const niche = typeof input.niche === "string" ? input.niche.trim() : "";
    if (!brandName) return { ok: false, error: "نام برند الزامی است." };
    if (!niche) return { ok: false, error: "حوزه فعالیت الزامی است." };
    return { ok: true, data: { role, phone, brandName, niche } };
  }

  const instagram = typeof input.instagram === "string" ? input.instagram.trim() : "";
  const followers = typeof input.followers === "string" ? input.followers.trim() : "";
  if (!instagram) return { ok: false, error: "آیدی اینستاگرام الزامی است." };
  if (!followers) return { ok: false, error: "تعداد فالوور الزامی است." };

  const followersNum = Number(followers);
  if (!Number.isFinite(followersNum) || followersNum < 0) {
    return { ok: false, error: "تعداد فالوور معتبر نیست." };
  }

  return { ok: true, data: { role, phone, instagram, followers } };
}
