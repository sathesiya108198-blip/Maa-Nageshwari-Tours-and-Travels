import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminServicesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;
  if (!session) redirect("/admin");

  return (
    <main className="admin-shell">
      <h1>Daily Services</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr><th>Route</th><th>Frequency</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Ahmedabad → Rajkot</td><td>Daily</td><td>Active</td></tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
