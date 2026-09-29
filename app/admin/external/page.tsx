import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const externalBuses = [
  { name: "VRL Deluxe", type: "Semi Sleeper", source: "External API" },
  { name: "Raj Express AC", type: "2+3 Seater", source: "External API" },
  { name: "Sharma Deluxe Sleeper", type: "Sleeper", source: "External API" },
];

export default async function ExternalBusesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell">
      <h1>External / API Buses</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>Type</th>
              <th>Source</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {externalBuses.map((bus) => (
              <tr key={bus.name}>
                <td>{bus.name}</td>
                <td>{bus.type}</td>
                <td>{bus.source}</td>
                <td>Verify override</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
