import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rufino Folador",
  description: "ONDE HÁ TRABALHO, TEM CRESCIMENTO. PARA PREFEITO DE BURITIS, VOTE EM RUFINO. VOTE 22!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
