const faqs = [
  { q: "Es seguro optimizar el sistema", a: "Totalmente. No usamos software de dudosa procedencia, solo ajustes manuales y scripts de optimización probados en entornos competitivos." },
  { q: "Cuánto tarda el mantenimiento", a: "Un mantenimiento físico profundo suele tardar entre 2 a 5 horas." }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-cyan-900 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <h3 className="font-bold text-lg mb-2 text-black faq-question cursor-pointer">¿{f.q}?</h3>
              <p className="text-slate-600 text-white">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
