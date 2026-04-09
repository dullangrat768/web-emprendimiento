 function IntermedioCTA() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto bg-cyan-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Lado Izquierdo: Texto informativo */}
          <div className="p-10 md:p-16 md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              ¿TU PC NECESITA UN <span className="text-slate-900">RESPIRO?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              No esperes a que el hardware sufra daños permanentes. Déjanos tus datos y te contactaremos para un diagnóstico técnico especializado.
            </p>
            <div className="hidden md:block">
            </div>
          </div>

          {/* Formulario */}
          <div className="p-8 md:p-12 md:w-1/2 w-full bg-slate-900/10 backdrop-blur-sm">
            <form className="space-y-4 bg-slate-800 p-8 rounded-2xl shadow-xl border border-white/10">
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Tu Nombre</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Ej: James Rodriguez"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">¿Qué falla presenta?</label>
                <textarea 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Ej: Mi pc se apaga en mis trabajos de edicion o renderizando"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-cyan-900 hover:bg-white hover:text-green-600 text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95"
              >
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IntermedioCTA;