'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Servicios() {
  const imagenesProduccion = [
    "/produccion_servicios/SP1-2.jpg",
    "/produccion_servicios/SP1-4.jpg",
    "/produccion_servicios/SP1-10.jpg",
    "/produccion_servicios/SP1-34.jpg",
    "/produccion_servicios/SP1-46.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagenesProduccion.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagenesProduccion.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imagenesProduccion.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imagenesProduccion.length) % imagenesProduccion.length);
  };

  const servicios = [
    {
      titulo: "Al Mayor",
      etiqueta: "B2B",
      icono: "🏪",
      descripcion: "Empanadas, tequeños, pastelitos y mandocas en grandes volúmenes para tu negocio.",
      beneficios: ["Producción escalable", "Entrega programada", "Precios mayoristas", "Variedad de sabores"]
    },
    {
      titulo: "Maquila",
      etiqueta: "Tu marca",
      icono: "🏭",
      descripcion: "Producimos tus empanadas y pastelitos bajo tu marca con etiquetado personalizado.",
      beneficios: ["Etiquetado personalizado", "Recetas a medida", "Control de calidad", "Trazabilidad completa"]
    },
    {
      titulo: "Al Detal",
      etiqueta: "Eventos",
      icono: "🎉",
      descripcion: "Cajas listas con tequeños, empanadas y pastelitos variados. Perfectas para eventos y reuniones.",
      beneficios: ["Listo para servir", "Variedad incluida", "Precocidos congelados", "Incluye salsa tártara"]
    }
  ];

  return (
    <section id="servicios" className="mt-12 sm:mt-16 md:mt-20 py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Nuestros <span className="text-[var(--rosa-fuerte)]">servicios</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
            Elegí el formato que se adapta a tu operación. Calidad profesional en cada presentación.
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-[var(--beige)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--outline)] hover:shadow-2xl sm:hover:scale-105 transition-all duration-300"
            >
              {/* Etiqueta */}
              <div className="absolute -top-2 sm:-top-3 right-4 sm:right-6">
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[var(--rosa-fuerte)] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg">
                  {servicio.etiqueta}
                </span>
              </div>

              {/* Icono */}
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{servicio.icono}</div>

              {/* Contenido */}
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--marron-suave)] mb-3 sm:mb-4">
                {servicio.titulo}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4 sm:mb-6">
                {servicio.descripcion}
              </p>

              {/* Beneficios */}
              <ul className="space-y-2">
                {servicio.beneficios.map((beneficio, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--rosa-fuerte)]"></span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Carrusel de imágenes de producción */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
            Nuestra <span className="text-[var(--rosa-fuerte)]">producción</span>
          </h3>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Carrusel */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {imagenesProduccion.map((imagen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={imagen}
                    alt={`Producción Samolina ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              
              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Imagen anterior"
              >
                <span className="text-xl sm:text-2xl text-[var(--marron-suave)]">←</span>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Siguiente imagen"
              >
                <span className="text-xl sm:text-2xl text-[var(--marron-suave)]">→</span>
              </button>
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {imagenesProduccion.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'w-8 bg-[var(--rosa-fuerte)]' 
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <a 
            href="#widget-contacto"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[var(--marron-suave)] text-white font-semibold hover:bg-[var(--rosa-fuerte)] transition-colors duration-300 shadow-lg text-sm sm:text-base"
          >
            Solicitar cotización
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
