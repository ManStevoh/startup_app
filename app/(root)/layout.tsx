import React from "react";
import Navbar from "@/app/components/navbar"; // Ensure the correct case

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
