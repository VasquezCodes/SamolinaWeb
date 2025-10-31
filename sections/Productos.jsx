export default function Productos() {
  const productos = [
    {
      nombre: "Empanadas",
      icono: "🥟",
      sabores: ["Carne Molida", "Carne Mechada", "Pollo", "Queso", "Jamón y Queso", "Pabellón", "Colombianas"],
      tamaños: ["Pequeñas (10 unidades)", "Grandes (5 unidades)"]
    },
    {
      nombre: "Tequeños",
      icono: "🥖",
      sabores: ["Queso", "Queso con Guayaba", "Masa Madre y Queso", "Yuca y Queso", "Maduro y Queso"],
      tamaños: ["10 unidades", "25 unidades", "50 unidades"]
    },
    {
      nombre: "Pastelitos",
      icono: "🥐",
      sabores: ["Pollo", "Carne Molida", "Carne Molida con Arroz", "Queso", "Queso con Guayaba", "Champiñón con Queso"],
      tamaños: ["Grandes (10 unidades)", "Medianos (25 unidades)"]
    },
    {
      nombre: "Mandocas",
      icono: "🍩",
      sabores: ["Tradicionales"],
      tamaños: ["Pequeñas (10 unidades)", "Grandes (5 unidades)"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Nuestros <span className="text-[var(--rosa-fuerte)]">productos</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
            100% comida latina. Precocidos y listos para freír o airfryer.
          </p>
        </div>

        {/* Productos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productos.map((producto, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[var(--outline)] hover:border-[var(--rosa-fuerte)] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icono */}
              <div className="text-5xl sm:text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {producto.icono}
              </div>

              {/* Nombre */}
              <h3 className="text-2xl font-bold text-[var(--marron-suave)] mb-4 text-center">
                {producto.nombre}
              </h3>

              {/* Sabores */}
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--rosa-fuerte)] mb-2">
                  Sabores disponibles:
                </p>
                <ul className="space-y-1.5">
                  {producto.sabores.map((sabor, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-[var(--rosa-fuerte)] mt-1">•</span>
                      <span>{sabor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tamaños */}
              <div className="pt-4 border-t border-[var(--outline)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Presentaciones:
                </p>
                <div className="space-y-1">
                  {producto.tamaños.map((tamaño, i) => (
                    <p key={i} className="text-xs text-neutral-600">
                      {tamaño}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-[var(--rosa-fuerte)] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <p className="text-lg sm:text-xl font-semibold mb-2">
              🎁 Cajas Mixtas Disponibles
            </p>
            <p className="text-sm sm:text-base opacity-95">
              Combina tequeños, empanadas y pastelitos en una sola caja. Incluye salsa tártara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
