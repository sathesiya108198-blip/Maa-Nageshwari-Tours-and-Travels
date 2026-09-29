import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const original = "2+1 Sleeper";
const verified = "1+2 Luxury Seater";

export default async function LayoutEditorPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("mn_admin_session")?.value;

  if (!session) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell">
      <h1>Layout Editor</h1>
      <div className="glass-box">
        <p>Bus: Maa Nageshwari Executive</p>
        <p>Operator: Maa Nageshwari Tours &amp; Travels</p>
        <div className="comparison-boxes">
          <div>
            <h3>Original API</h3>
            <p>{original}</p>
          </div>
          <div>
            <h3>Admin Modified</h3>
            <p>{verified}</p>
          </div>
        </div>
        <div className="layout-preview">
          <div className="deck-block">
            <h4>Lower Deck</h4>
            <div className="seat-grid">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={`lower-${index}`} className="seat-badge">{index + 1}</span>
              ))}
            </div>
          </div>
          <div className="deck-block">
            <h4>Upper Deck</h4>
            <div className="seat-grid">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={`upper-${index}`} className="seat-badge alt">{index + 1}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="inline-actions">
          <button className="primary-button" type="button">Request OTP</button>
          <button className="secondary-button" type="button">Save Override</button>
        </div>
      </div>
    </main>
  );
}
