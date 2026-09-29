import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-mark">MN</div>
          <div>
            <strong>Maa Nageshwari</strong>
            <span>Tours &amp; Travels</span>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/daily-service">Daily Service</Link></li>
            <li><Link href="/tour-packages">Tour Packages</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/media">Media</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>☎ +91 98765 43210</li>
            <li>✉ hello@maanageshwari.in</li>
            <li>Mon-Sat: 8:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Maa Nageshwari Tours &amp; Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
