import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Productos from "../sections/Productos";
import Servicios from "../sections/Servicios";
import Sobre from "../sections/Sobre";
import Contacto from "../sections/Contacto";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Productos />
      <Servicios />
      <Sobre />
      <Contacto />
      <Footer />
    </main>
  );
}
