import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const buses = [
  { name: "Maa Nageshwari Executive", operator: "Maa Nageshwari", status: "Active" },
  { name: "VRL Deluxe", operator: "VRL Travels", status: "External API" },
  { name: "Raj Express AC", operator: "Raj Express", status: "Review" },
];

export default async function AdminBusesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell">
      <h1>Buses</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>Operator</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.name}>
                <td>{bus.name}</td>
                <td>{bus.operator}</td>
                <td>{bus.status}</td>
                <td>View · Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
