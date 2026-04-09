const beneficios = [
  { title: "Menos Latencia", desc: "Reducción de input lag y optimización de frames para gaming competitivo.", icon: "🎯" },
  { title: "Hardware Seguro", desc: "Uso de herramientas antiestáticas y pastas térmicas de alto rendimiento (Artic MX-6).", icon: "🛡️" },
  { title: "Soporte Remoto", desc: "Solucionamos problemas de software sin que salgas de casa.", icon: "⚡" }
];

export default function Beneficios() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {beneficios.map((b, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span className="text-3xl">{b.icon}</span>
            <div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">{b.title}</h3>
              <p className="text-slate-600">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}