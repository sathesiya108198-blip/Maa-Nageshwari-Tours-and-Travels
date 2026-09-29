"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("Pritesh");
  const [password, setPassword] = useState("nageshwari@2026");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [message, setMessage] = useState("Admin portal");
  const [loading, setLoading] = useState(false);

  const requestOtp = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("Generating secure OTP...");
    const response = await fetch("/api/admin/otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setMessage(data.message || "Unable to generate OTP.");
      return;
    }
    setStep("otp");
    setMessage(data.message || "OTP sent. Enter the 6-digit verification code.");
  };

  const verifyLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("Verifying OTP...");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, otp }),
    });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setMessage(data.message || "Invalid OTP.");
      return;
    }
    window.location.href = "/admin/dashboard";
  };

  return (
    <main className="page-shell">
      <section className="section-wrap compact-center">
        <form className="auth-form" onSubmit={step === "credentials" ? requestOtp : verifyLogin}>
          <h1>Admin Login</h1>
          <p className="muted">{message}</p>

          {step === "credentials" ? (
            <>
              <label>
                Username
                <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Pritesh" />
              </label>
              <label>
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
              </label>
            </>
          ) : (
            <label>
              OTP
              <input value={otp} maxLength={6} onChange={(event) => setOtp(event.target.value)} placeholder="Enter 6-digit code" />
            </label>
          )}

          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Please wait..." : step === "credentials" ? "Request OTP" : "Verify OTP"}
          </button>
        </form>
      </section>
    </main>
  );
}
