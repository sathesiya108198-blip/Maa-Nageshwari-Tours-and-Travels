import { NextResponse } from "next/server";
import { verifyAdminCredentials, verifyOtpForUser } from "../../../../lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");
    const otp = String(body.otp ?? "");

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ ok: false, message: "Invalid admin credentials." }, { status: 401 });
    }

    const result = verifyOtpForUser(username, otp);
    if (!result.valid) {
      return NextResponse.json({ ok: false, message: result.reason }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true, message: "Admin access verified." });
    response.cookies.set("mn_admin_session", username, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Unable to verify admin login." }, { status: 500 });
  }
}
