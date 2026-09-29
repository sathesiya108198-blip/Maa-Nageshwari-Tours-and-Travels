import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const stats = [
  { label: "Total buses", value: "128" },
  { label: "Bookings today", value: "54" },
  { label: "Verified overrides", value: "12" },
  { label: "Operators", value: "17" },
];

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="admin-grid">
        <div className="glass-box">
          <h3>Quick actions</h3>
          <div className="stack-list">
            <Link href="/admin/buses">Manage buses</Link>
            <Link href="/admin/layout-editor">Layout editor</Link>
            <Link href="/admin/verified-overrides">Verified overrides</Link>
          </div>
        </div>
        <div className="glass-box">
          <h3>Recent activity</h3>
          <ul className="list-ul">
            <li>Maa Nageshwari Executive verified override saved.</li>
            <li>City search updated for 16 destinations.</li>
            <li>External API schedule reviewed.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
