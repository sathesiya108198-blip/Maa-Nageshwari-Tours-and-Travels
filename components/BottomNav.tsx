import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "Book", href: "/booking" },
  { label: "Daily", href: "/daily-service" },
  { label: "Admin", href: "/admin" },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {nav.map((item) => (
        <Link key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
