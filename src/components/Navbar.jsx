function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 px-6 flex justify-between items-center border-b border-slate-800">
      {/* Nombre empresa */}
      <div className="text-xl font-bold tracking-tighter">
        MANTENIMIENTO PC <span className="text-blue-500">J&S</span>
      </div>

      {/* Menú de Navegación */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#inicio" className="hover:text-blue-400 text-white">Inicio</a>
        <a href="#servicios" className="hover:text-blue-400">Servicios</a>
        <a href="#testimonios" className="hover:text-blue-400">testimonios</a>
        <a href="#FAQ" className="hover:text-blue-400">FAQ</a>
        <a href="#contacto" className="hover:text-blue-400">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;