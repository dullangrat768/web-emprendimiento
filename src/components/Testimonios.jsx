const reviews = [
  { name: "Andrés G.", text: "Mi pc mejoro demasiado cuando se aplicaron las optimizaciones y el cambio de sistema operativo, puedo abrir rapido mis programas de photoshop sin problemas!", rank: "Editor" },
  { name: "Gabriel P.", text: "Excelente servicio de limpieza. El equipo quedó como nuevo y sin ninguna pisca de mugre y las temperaturas bajaron 15°C.", rank: "Creador de contenido" }
];

export default function Testimonios() {
  return (
    <section className="py-20 bg-slate-900 text-white px-6">
      <h2 className="text-3xl font-bold text-center mb-12 italic">Nuestros clientes aseguran nuestra calidad</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-2xl border-l-4 border-cyan-900">
            <p className="italic mb-4 text-slate-300">"{r.text}"</p>
            <p className="font-bold text-cyan-400">{r.name}</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{r.rank}</p>
          </div>
        ))}
      </div>
    </section>
  );
}