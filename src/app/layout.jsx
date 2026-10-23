import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Bryan Wille | Engenharia de Software, Sistemas & IA",
  description:
    "Bryan Wille — Analista de Sistemas Pleno II na Deloitte, Cientista da Computação e pós-graduando em Engenharia de IA e MLOps.",
  openGraph: {
    title: "Bryan Wille | Engenharia de Software, Sistemas & IA",
    description:
      "Produtos digitais, sistemas corporativos e engenharia de dados aplicada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}