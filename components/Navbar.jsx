'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#sobre', label: 'Sobre nosotros' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--outline)] shadow-sm font-poppins">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo Compuesto */}
          <a href="#inicio" className="flex items-center gap-4 group">
            {/* Logo con capas superpuestas */}
            <div className="relative h-16 w-16 md:h-24 md:w-24 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo/fondo.png"
                alt="Fondo logo Samolina"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
              <Image
                src="/logo/letras.png"
                alt="Samolina Factory logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl md:text-4xl font-bold text-[var(--marron-suave)]">Samolina Factory</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-700 hover:text-[var(--rosa-fuerte)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#widget-contacto"
              className="px-6 py-2.5 rounded-full bg-[var(--rosa-fuerte)] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--beige)] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-neutral-700 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="animate-in"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden border-t border-[var(--outline)] bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-[var(--beige)] hover:text-[var(--rosa-fuerte)] transition-all duration-200 transform ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                transitionDuration: '300ms'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#widget-contacto"
            onClick={() => setIsOpen(false)}
            className={`block w-full px-4 py-3 rounded-xl bg-[var(--rosa-fuerte)] text-white text-center font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: isOpen ? '150ms' : '0ms',
              transitionDuration: '300ms'
            }}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}