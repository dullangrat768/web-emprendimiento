function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">CONTACTO</h2>
          <p className="text-slate-400 text-lg">Estamos listos para ayudarte, contactanos!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">📍 Ubicación</h3>
              <p className="text-slate-400">Atención a domicilio en Bogotá y alrededores.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">📞 WhatsApp</h3>
              <p className="text-slate-400">+57 312 3146450</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">⏰ Horarios</h3>
              <p className="text-slate-400">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;