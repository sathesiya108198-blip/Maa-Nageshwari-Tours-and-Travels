import DailyServiceCard from "../../components/DailyServiceCard";
import { services } from "../../data/services";

export default function DailyServicePage() {
  return (
    <main className="page-shell">
      <section className="section-wrap">
        <p className="eyebrow">Daily service</p>
        <h1>Regular service routes</h1>
        <div className="card-grid three">
          {services.map((service) => (
            <DailyServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
