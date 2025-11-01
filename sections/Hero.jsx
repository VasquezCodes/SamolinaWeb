import Image from 'next/image';

export default function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden mt-28 md:mt-36">
      {/* Mobile Hero - Con collage de imágenes */}
      <div className="md:hidden bg-gradient-to-b from-white to-[var(--beige)] pt-24 pb-20 px-4">
        {/* Content */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border-2 border-[var(--outline)] shadow-md mb-6">
            <span className="h-3 w-3 rounded-full bg-[var(--rosa-fuerte)] animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--marron-suave)]">
              Fábrica de comida latina
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight mb-6">
            Sabor auténtico,{' '}
            <span className="text-[var(--rosa-fuerte)]">calidad</span>{' '}
            profesional
          </h1>
          
          <p className="text-base leading-relaxed max-w-md mx-auto mb-8 text-neutral-600">
            Empanadas, tequeños, pastelitos y mandocas artesanales. Producción a escala para food trucks, restaurantes y marcas. También cajas mixtas para eventos y tu hogar.
          </p>
        </div>

        {/* Collage de imágenes - Bento Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* Imagen grande izquierda */}
          <div className="row-span-2">
            <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/heroImg/SCF-60.jpg"
                alt="Productos Samolina"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Imagen superior derecha */}
          <div>
            <div className="relative h-[165px] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/heroImg/SCF-63.jpg"
                alt="Comida latina"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Imagen inferior derecha */}
          <div>
            <div className="relative h-[165px] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/heroImg/SCF-70.jpg"
                alt="Producción Samolina"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a 
            href="#servicios" 
            className="group px-8 py-4 rounded-full bg-[var(--rosa-fuerte)] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            Ver servicios
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#widget-contacto" 
            className="px-8 py-4 rounded-full border-2 border-[var(--rosa-fuerte)] text-[var(--rosa-fuerte)] font-semibold hover:bg-[var(--rosa-fuerte)] hover:text-white transition-all duration-300 text-center"
          >
            Hacer pedido
          </a>
        </div>
      </div>

      {/* Desktop Hero - Layout original */}
      <div className="hidden md:block bg-gradient-to-b from-white to-[var(--beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-32 md:pb-40 lg:pb-48">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border-2 border-[var(--outline)] shadow-md">
                <span className="h-3 w-3 rounded-full bg-[var(--rosa-fuerte)] animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--marron-suave)]">
                  Fábrica de comida latina
                </span>
              </div>
              
              <h1 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Sabor auténtico,{' '}
                <span className="text-[var(--rosa-fuerte)]">calidad</span>{' '}
                profesional
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Empanadas, tequeños, pastelitos y mandocas artesanales. Producción a escala para <span className="font-semibold text-[var(--marron-suave)]">food trucks</span>, <span className="font-semibold text-[var(--marron-suave)]">restaurantes</span> y <span className="font-semibold text-[var(--marron-suave)]">marcas</span>. 
                También cajas mixtas para eventos y tu hogar.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#servicios" 
                  className="group px-8 py-4 rounded-full bg-[var(--rosa-fuerte)] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Ver servicios
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="#widget-contacto" 
                  className="px-8 py-4 rounded-full border-2 border-[var(--rosa-fuerte)] text-[var(--rosa-fuerte)] font-semibold hover:bg-[var(--rosa-fuerte)] hover:text-white transition-all duration-300"
                >
                  Hacer pedido
                </a>
              </div>
            </div>

            {/* Galería de imágenes */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-56 lg:h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/heroImg/SCF-60.jpg"
                      alt="Productos Samolina"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 lg:h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/heroImg/SCF-63.jpg"
                      alt="Comida latina Samolina"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-40 lg:h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/heroImg/SCF-70.jpg"
                      alt="Producción Samolina"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-56 lg:h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/heroImg/SCF-72.jpg"
                      alt="Emprendimiento Samolina"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="hidden lg:block absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--rosa)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--menta)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
