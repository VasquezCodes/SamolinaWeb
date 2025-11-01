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
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' }
    ],
    shortcut: ['/icon.png'],
    apple: ['/icon.png']
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
