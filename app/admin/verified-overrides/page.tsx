import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const overrides = [
  { bus: "VRL Deluxe", status: "Verified", user: "Pritesh" },
  { bus: "Maa Nageshwari Executive", status: "Pending Verification", user: "Pritesh" },
  { bus: "Raj Express AC", status: "Rejected", user: "Pritesh" },
];

export default async function VerifiedOverridesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell">
      <h1>Verified Overrides</h1>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>Status</th>
              <th>Updated by</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {overrides.map((override) => (
              <tr key={override.bus}>
                <td>{override.bus}</td>
                <td>{override.status}</td>
                <td>{override.user}</td>
                <td>Operator confirmed the physical arrangement.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
