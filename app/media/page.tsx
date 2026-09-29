import Image from "next/image";

const mediaItems = [
  { title: "Executive coach", image: "/images/bus-1.jpg" },
  { title: "Touring route", image: "/images/bus-1.jpg" },
  { title: "Customer journey", image: "/images/bus-1.jpg" },
  { title: "On the road", image: "/images/bus-1.jpg" },
];

export default function MediaPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Media</p>
            <h1>Travel moments from our fleet</h1>
          </div>
        </div>
        <div className="gallery-grid">
          {mediaItems.map((item) => (
            <article key={item.title} className="media-card">
              <Image src={item.image} alt={item.title} width={500} height={300} className="media-image" />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
