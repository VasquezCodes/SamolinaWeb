export default function Contacto() {
  const testimonios = [
    {
      texto: "Esos tequeños estaban 😋😋😋",
      autor: "Review en Instagram",
      rating: 5
    },
    {
      texto: "Se ven deliciosos! 😍",
      autor: "Review en Instagram",
      rating: 5
    },
    {
      texto: "👍👍👍👍👍",
      autor: "Review en Instagram",
      rating: 5
    },
    {
      texto: "Los mejores! Son adictivos 😍",
      autor: "Review en Instagram",
      rating: 5
    },
    {
      texto: "Simplemente los mejores!!! Muchas gracias!!! Se sobraron!",
      autor: "Review en Instagram",
      rating: 5
    }
  ];

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ¿Listo para <span className="text-[var(--rosa-fuerte)]">empezar?</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-600">
            Contáctanos y descubre cómo podemos ayudarte con tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Testimonios */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
              Lo que dicen nuestros clientes
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {testimonios.map((testimonio, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-[var(--beige)] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--outline)] shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <span key={i} className="text-[var(--rosa-fuerte)] text-lg sm:text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-3 sm:mb-4">
                    "{testimonio.texto}"
                  </p>
                  
                  <p className="text-xs sm:text-sm font-semibold text-[var(--marron-suave)]">
                    — {testimonio.autor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div id="widget-contacto" className="lg:sticky lg:top-24">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--rosa-fuerte)] to-[var(--rosa)] p-6 sm:p-8 md:p-10 shadow-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                ¡Hablemos!
              </h3>
              <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">
                Escríbenos por WhatsApp o Instagram. Atendemos desde Altamonte Springs, FL.
              </p>

              {/* Botones de contacto */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a
                  className="flex items-center justify-center gap-2 sm:gap-3 w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-[var(--rosa-fuerte)] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  href="https://api.whatsapp.com/send/?phone=16892410894&text=Hola%20Samolina%2C%20quiero%20hacer%20un%20pedido&type=phone_number&app_absent=0"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                
                <a
                  className="flex items-center justify-center gap-2 sm:gap-3 w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[var(--rosa-fuerte)] transition-all duration-300 text-sm sm:text-base"
                  href="https://www.instagram.com/samolina.factory"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>

              {/* Info adicional */}
              <div className="pt-4 sm:pt-6 border-t border-white/20">
                <div className="flex items-start gap-2 sm:gap-3 text-white/90">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Altamonte Springs, FL</p>
                    <p className="text-xs sm:text-sm mt-1">970 Sunshine Ln, Unit E, FL 32714, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
