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
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    shortcut: ['/favicon.ico'],
    apple: ['/favicon.ico']
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
