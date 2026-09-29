import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import AIAssistant from "../components/AIAssistant";

export const metadata: Metadata = {
  title: "Maa Nageshwari Tours & Travels",
  description: "Travel search, daily service, and admin platform for Maa Nageshwari Tours & Travels.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="page-content">{children}</main>
          <BottomNav />
          <AIAssistant />
        </div>
      </body>
    </html>
  );
}