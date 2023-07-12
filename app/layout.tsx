import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

const sourcesans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sobat Bangun",
  description:
    "SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={sourcesans.className}>{children}</body>
    </html>
  );
}
