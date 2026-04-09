const servicioslista = [
  {
    title: "Mantenimiento Preventivo",
    desc: "Limpieza profunda de componentes, cambio de pasta térmica y gestión de cables.",
    icon: "🛠️"
  },
  {
    title: "Optimización de Software",
    desc: "Ajustes de Windows, eliminación de bloatware y reducción de input lag.",
    icon: "🚀"
  },
  {
    title: "Diagnóstico y Reparación",
    desc: "Identificación de fallos en hardware y sustitución de piezas defectuosas.",
    icon: "🔍"
  },
  {
    title: "Cambio de Sistema Operativo",
    desc: "Cambiamos su sistema operativo, sea de PC o Android a uno mas rapido o mas customizable segun su gusto y indicaciones",
    icon: "💻"
  }
];

function Servicios() {
  return (
    <section className="py-16 bg-cyan-900 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicioslista.map((s, i) => (
          <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">{s.title}</h3>
            <p className="text-white">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
