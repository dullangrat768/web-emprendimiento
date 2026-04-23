import React, { useState, useEffect } from 'react';

function IntermedioCTA() {
  const [nombre, setNombre] = useState('');
  const [falla, setFalla] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'start_conversion',
      form_id: 'cta_intermedio_pc'
    });
    
    const portalId = "51380137";
    const formId = "e321078c-257a-4e66-9526-149ffe8bca00";
    
    const data = {
      fields: [
        { name: "firstname", value: nombre },
        { name: "message", value: falla },
    
        { name: "email", value: `${nombre.replace(/\s+/g, '').toLowerCase()}@cliente.com` } 
    ],
      context: {
      pageUri: window.location.href,
      pageName: document.title
    }
};

    try {
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        // EVENTO: Conversión exitosa (solo si HubSpot responde ok)
        window.dataLayer.push({
          event: 'generate_lead',
          tipo_servicio: 'diagnostico_pc'
        });

        
        alert("¡Recibido! Nos pondremos en contacto para el soporte de tu PC.");
        setNombre('');
        setFalla('');
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setEnviando(false);
    }
  };
  
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto bg-cyan-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="p-10 md:p-16 md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              ¿TU PC NECESITA UN <span className="text-slate-900">RESPIRO?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              No esperes a que el hardware sufra daños permanentes. Déjanos tus datos y te contactaremos para un diagnóstico técnico especializado.
            </p>
          </div>

          <div className="p-8 md:p-12 md:w-1/2 w-full bg-slate-900/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800 p-8 rounded-2xl shadow-xl border border-white/10">
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Ej: James Rodriguez"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">¿Qué falla presenta?</label>
                <textarea 
                  required
                  value={falla}
                  onChange={(e) => setFalla(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Ej: Mi pc se apaga en mis trabajos..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={enviando}
                className="w-full bg-cyan-900 hover:bg-white hover:text-green-600 text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {enviando ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IntermedioCTA;
