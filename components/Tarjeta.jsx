export default function Tarjeta({ titulo, texto, etiqueta }) {
  return (
    <div className="relative rounded-3xl border border-[var(--outline)] bg-white/70 p-6 hover:bg-white transition-colors">
      <span className="absolute right-4 top-4 text-xs px-2.5 py-1 rounded-full bg-[var(--menta)] border border-[var(--outline)]">
        {etiqueta}
      </span>
      <h3 className="text-lg font-semibold">{titulo}</h3>
      <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{texto}</p>
    </div>
  );
}
