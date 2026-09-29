import { NextResponse } from "next/server";
import { createChallenge, verifyAdminCredentials } from "../../../../lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ ok: false, message: "Invalid admin credentials." }, { status: 401 });
    }

    const otp = createChallenge(username);

    return NextResponse.json({ ok: true, message: "OTP sent. Enter the 6-digit verification code.", expiresInMs: 5 * 60 * 1000 });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Unable to generate OTP." }, { status: 500 });
  }
}
