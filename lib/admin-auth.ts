import crypto from "node:crypto";

const ONE_MINUTE = 60 * 1000;
const fiveMinutes = 5 * ONE_MINUTE;

export const adminCredentials = {
  username: process.env.ADMIN_USERNAME ?? "Pritesh",
  password: process.env.ADMIN_PASSWORD ?? "nageshwari@2026",
};

export const otpStore = new Map<string, { otp: string; expiresAt: number; attempts: number; lockedUntil: number | null }>();

export const generateOtp = () => crypto.randomInt(100000, 999999).toString();

export const createChallenge = (username: string) => {
  const otp = generateOtp();
  const expiresAt = Date.now() + fiveMinutes;
  otpStore.set(username, {
    otp,
    expiresAt,
    attempts: 0,
    lockedUntil: null,
  });
  console.log(`DEV OTP: ${otp}`);
  return otp;
};

export const verifyAdminCredentials = (username: string, password: string) => {
  return username === adminCredentials.username && password === adminCredentials.password;
};

export const verifyOtpForUser = (username: string, otp: string) => {
  const challenge = otpStore.get(username);
  if (!challenge) return { valid: false, reason: "No OTP challenge found." };

  if (challenge.lockedUntil && Date.now() < challenge.lockedUntil) {
    return { valid: false, reason: "Too many attempts. Please wait and retry." };
  }

  if (Date.now() > challenge.expiresAt) {
    otpStore.delete(username);
    return { valid: false, reason: "OTP expired. Request a new code." };
  }

  if (String(challenge.otp) !== String(otp)) {
    challenge.attempts += 1;
    if (challenge.attempts >= 3) {
      challenge.lockedUntil = Date.now() + 2 * ONE_MINUTE;
      challenge.attempts = 0;
    }
    otpStore.set(username, challenge);
    return { valid: false, reason: "Invalid OTP." };
  }

  otpStore.delete(username);
  return { valid: true, reason: "Verified." };
};
