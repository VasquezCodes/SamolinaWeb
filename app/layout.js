import "./globals.css";
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Samolina Factory — Fábrica de comida latina",
  description: "Empanadas, tequeños, pastelitos y mandocas artesanales. Al mayor, maquila y al detal. Altamonte Springs, FL.",
  icons: {
    icon: '/logo/logo.jpeg',
    shortcut: '/logo/logo.jpeg',
    apple: '/logo/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
