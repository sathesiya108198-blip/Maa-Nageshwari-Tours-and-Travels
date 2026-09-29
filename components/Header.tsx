"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Booking", href: "/booking" },
  { label: "Daily Service", href: "/daily-service" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Media", href: "/media" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="top-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <span>☎ +91 98765 43210</span>
            <span className="divider" aria-hidden="true" />
            <span>✉ hello@maanageshwari.in</span>
          </div>

          <div className="top-strip-right" aria-label="Social channels">
            <span>f</span>
            <span>in</span>
            <span>X</span>
          </div>
        </div>
      </div>

      <div className="nav-wrap container">
        <Link href="/" className="brand-box" aria-label="Maa Nageshwari home">
          <div className="brand-mark">MN</div>
          <div className="brand-copy">
            <strong>Maa Nageshwari</strong>
            <small>Tours &amp; Travels</small>
          </div>
        </Link>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link href="/login" className="secondary-button small-button">Login</Link>
          <Link href="/register" className="primary-button small-button">Register</Link>
          <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
