import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap contact-layout">
        <div className="glass-box">
          <p className="eyebrow">Contact</p>
          <h1>Speak to our travel team</h1>
          <ul className="contact-list">
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Email:</strong> hello@maanageshwari.in</li>
            <li><strong>Address:</strong> Ahmedabad, Gujarat</li>
            <li><strong>Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
        <div className="glass-box">
          <form className="stack-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <textarea rows={5} placeholder="Tell us how we can help" />
            </label>
            <button type="button" className="primary-button">Send message</button>
          </form>
        </div>
      </section>
      <div className="section-wrap center">
        <Link href="/booking" className="secondary-button">Book a ride</Link>
      </div>
    </main>
  );
}
