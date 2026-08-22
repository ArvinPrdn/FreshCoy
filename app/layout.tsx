import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freshcoy Package — Smart Packaging untuk Memantau Pakcoy",
  description: "Prototype Freshcoy Package untuk membantu melihat perubahan kondisi pakcoy selama penyimpanan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
