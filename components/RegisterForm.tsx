"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Customer registration mock", { name, email, mobile });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Create account</h1>
      <label>
        Full name
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" />
      </label>
      <label>
        Mobile
        <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="98765 43210" />
      </label>
      <button className="primary-button" type="submit">Register</button>
      <p>
        Already registered? <Link href="/login">Login</Link>
      </p>
    </form>
  );
}
