import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Bryan Wille | Engenharia de Soluções, Sites & Sistemas Sob Medida",
  description:
    "Desenvolvimento web de alta performance, automação de processos, integração de APIs e sistemas sob medida com rigor de engenharia corporativa.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Bryan Wille | Engenharia de Soluções & Software",
    description:
      "Sites ultrarrápidos, automações em nuvem, integrações de APIs e sistemas web sob medida para a sua operação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${displayFont.variable} ${jetBrainsMono.variable} bg-[#FAFAF9] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
