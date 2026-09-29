"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Customer login mock", { email, password });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Customer Login</h1>
      <label>
        Email
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
      </label>
      <button className="primary-button" type="submit">Login</button>
      <p>
        No account yet? <Link href="/register">Register</Link>
      </p>
    </form>
  );
}
