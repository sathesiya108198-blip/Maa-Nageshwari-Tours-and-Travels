import Link from "next/link";

const packages = [
  { name: "Gujarat Heritage Tour", duration: "3 Days", price: 4999, highlights: ["Ahmedabad", "Somnath", "Dwarka"] },
  { name: "Saurashtra Circuit", duration: "4 Days", price: 6499, highlights: ["Rajkot", "Junagadh", "Gir"] },
  { name: "Weekend Escape", duration: "2 Days", price: 3899, highlights: ["Vadodara", "Statue of Unity"] },
];

export default function TourPackagesPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap">
        <p className="eyebrow">Tour packages</p>
        <h1>Explore handcrafted travel experiences</h1>
        <div className="card-grid three">
          {packages.map((pkg) => (
            <article key={pkg.name} className="feature-card">
              <div className="mini-visual" />
              <h3>{pkg.name}</h3>
              <p>{pkg.duration}</p>
              <div className="pill-row">
                {pkg.highlights.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
              <strong>From ₹{pkg.price}</strong>
              <Link href="/contact" className="secondary-button">Enquire now</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
