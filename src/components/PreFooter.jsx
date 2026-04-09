const marcas = [
  { name: "Intel", desc: "Procesadores" },
  { name: "NVIDIA", desc: "Gráficos" },
  { name: "AMD", desc: "Rendimiento" },
  { name: "ASUS", desc: "Motherboards" },
  { name: "Samsung", desc: "Almacenamiento" },
  { name: "Kingston", desc: "Memorias RAM" }
];

function PreFooter() {
  return (
    <section className="bg-slate-950 py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-white text-2xl md:text-3xl font-black mb-4 tracking-tight">
            CALIDAD SIN <span className="text-cyan-600">PROBLEMAS</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Importamos nuestras piezas <span className="text-white font-bold">100% originales</span> directamente con las marcas líderes de la industria para garantizar la máxima durabilidad de tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 group">
          {marcas.map((marca, i) => (
            <div key={i} className="text-center p-4 rounded-xl hover:bg-white/5 hover:opacity-100 transition-all duration-300">
              <div className="text-white font-black text-xl tracking-tighter mb-1 uppercase">
                {marca.name}
              </div>
              <div className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">
                {marca.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center mb-4">
              📦
            </div>
            <h4 className="text-white font-bold mb-2">Piezas Originales</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nada de imitaciones. Solo componentes certificados con seriales verificables de fábrica.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center mb-4">
              ✈️
            </div>
            <h4 className="text-white font-bold mb-2">Importación Directa</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Traemos lo último en tecnología directamente a Bogotá, asegurando precios competitivos.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center mb-4">
              ✅
            </div>
            <h4 className="text-white font-bold mb-2">Garantía Real</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Respaldamos cada pieza instalada con garantía directa por defectos de fabricación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooter;