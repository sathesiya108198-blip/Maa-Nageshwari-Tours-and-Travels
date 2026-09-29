import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminBookingsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;
  if (!session) redirect("/admin");

  return (
    <main className="admin-shell">
      <h1>Bookings</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr><th>Booking ID</th><th>Route</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>MN-12345</td><td>Ahmedabad → Rajkot</td><td>Confirmed</td></tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
