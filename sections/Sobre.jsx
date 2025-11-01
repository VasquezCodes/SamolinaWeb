'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Sobre() {
  const imagenesHistoria = [
    "/nuestraHistoria/historiaSamolina.jpg",
    "/nuestraHistoria/samolina1.jpg",
    "/nuestraHistoria/samolina3.jpg",
    "/nuestraHistoria/MSF-6.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagenesHistoria.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagenesHistoria.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imagenesHistoria.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imagenesHistoria.length) % imagenesHistoria.length);
  };

  const valores = [
    {
      titulo: "Calidad consistente",
      descripcion: "Recetas estandarizadas y procesos controlados",
      icono: "✓"
    },
    {
      titulo: "Trazabilidad total",
      descripcion: "Etiquetado nutricional y control de lotes",
      icono: "✓"
    },
    {
      titulo: "Producción escalable",
      descripcion: "Desde pequeños pedidos hasta grandes volúmenes",
      icono: "✓"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[var(--beige)] to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[var(--outline)] shadow-sm mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[var(--marron-suave)]">
              Nuestra historia
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Sobre <span className="text-[var(--rosa-fuerte)]">Samolina</span>
          </h2>
        </div>

        {/* Carrusel de imágenes */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="relative">
            {/* Carrusel */}
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {imagenesHistoria.map((imagen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={imagen}
                    alt={`Historia Samolina ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
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
              
              {/* Stats decorativos */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-[var(--outline)] z-10">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--rosa-fuerte)]">100%</div>
                <div className="text-xs sm:text-sm text-neutral-600 font-medium">Sabor latino</div>
              </div>
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {imagenesHistoria.map((_, index) => (
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

        {/* Contenido */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed text-center sm:text-left">
            Somos una fábrica especializada en <span className="font-semibold text-[var(--marron-suave)]">empanadas, tequeños, pastelitos y mandocas</span> artesanales. Combinamos recetas tradicionales con procesos estandarizados para garantizar <span className="font-semibold text-[var(--marron-suave)]">sabor auténtico</span> en cada producto.
          </p>
          
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed text-center sm:text-left">
            Ofrecemos múltiples sabores: carne molida, carne mechada, pollo, queso, queso con guayaba, jamón y queso, y más. Todos nuestros productos vienen precocidos y listos para freír o airfryer.
          </p>

          {/* Valores */}
          <div className="mt-8 sm:mt-10 md:mt-12 space-y-3 sm:space-y-4">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[var(--outline)] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--rosa-fuerte)] text-white flex items-center justify-center font-bold text-base sm:text-lg">
                  {valor.icono}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--marron-suave)] text-base sm:text-lg">
                    {valor.titulo}
                  </h3>
                  <p className="text-neutral-600 mt-1 text-sm sm:text-base">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ubicación */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--menta)] to-[var(--crema)] border border-[var(--outline)]">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-semibold text-[var(--marron-suave)] text-base sm:text-lg">Altamonte Springs, FL</h4>
                <p className="text-sm sm:text-base text-neutral-600 mt-1">970 Sunshine Ln, Unit E, FL 32714, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
