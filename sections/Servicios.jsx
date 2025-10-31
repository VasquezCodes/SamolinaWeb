export default function Servicios() {
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
