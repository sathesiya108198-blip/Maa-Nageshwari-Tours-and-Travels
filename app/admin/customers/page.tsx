import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminCustomersPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;
  if (!session) redirect("/admin");

  return (
    <main className="admin-shell">
      <h1>Customers</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr><th>Name</th><th>Mobile</th><th>Trips</th></tr>
          </thead>
          <tbody>
            <tr><td>Demo Customer</td><td>98765 43210</td><td>12</td></tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
