import React, { useEffect } from 'react';

function IntermedioCTA() {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/embed/v2.js';
  script.defer = true;
  
  script.onload = () => {
    const checkExist = setInterval(() => {
      const container = document.getElementById('hubspot-form-container');
      
      if (container && window.hbspt) {
        clearInterval(checkExist);
        window.hbspt.forms.create({
          region: "na1",
          portalId: "51380137",
          formId: "e321078c-257a-4e66-9526-149ffe8bca00",
          target: "#hubspot-form-container"
        });
      }
    }, 100); 
  };
  
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
  
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
          <div className="p-8 md:p-12 md:w-1/2 w-full bg-slate-900/10 backdrop-blur-sm flex justify-center">
            <div className="w-full bg-slate-800 p-8 rounded-2xl shadow-xl border border-white/10">

              {/* PEGADO DEL CÓDIGO DE HUBSPOT */}
              <script
                src="https://js.hsforms.net/forms/embed/51380137.js"
                defer
              ></script>
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id="e321078c-257a-4e66-9526-149ffe8bca00"
                data-portal-id="51380137"
              ></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IntermedioCTA;
