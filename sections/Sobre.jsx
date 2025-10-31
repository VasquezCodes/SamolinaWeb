import Image from 'next/image';

export default function Sobre() {
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/samolina.jpg"
                  alt="Sobre Samolina Factory"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Stats decorativos */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-[var(--outline)]">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--rosa-fuerte)]">100%</div>
                <div className="text-xs sm:text-sm text-neutral-600 font-medium">Sabor latino</div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[var(--outline)] shadow-sm mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[var(--marron-suave)]">
                Nuestra historia
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Sobre <span className="text-[var(--rosa-fuerte)]">Samolina</span>
            </h2>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Somos una fábrica especializada en <span className="font-semibold text-[var(--marron-suave)]">empanadas, tequeños, pastelitos y mandocas</span> artesanales. Combinamos recetas tradicionales con procesos estandarizados para garantizar <span className="font-semibold text-[var(--marron-suave)]">sabor auténtico</span> en cada producto.
            </p>
            
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Ofrecemos múltiples sabores: carne molida, carne mechada, pollo, queso, queso con guayaba, jamón y queso, y más. Todos nuestros productos vienen precocidos y listos para freír o airfryer.
            </p>

            {/* Valores */}
            <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
              {valores.map((valor, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[var(--outline)] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--rosa-fuerte)] text-white flex items-center justify-center font-bold text-sm sm:text-base">
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
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--menta)] to-[var(--crema)] border border-[var(--outline)]">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold text-[var(--marron-suave)] text-sm sm:text-base">Altamonte Springs, FL</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">970 Sunshine Ln, Unit E, FL 32714, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
