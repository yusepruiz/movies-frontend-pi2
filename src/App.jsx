import { Outlet, Link, useLocation } from 'react-router';
import { menuConfig } from '@/routes/menuConfig';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // Cerrar el offcanvas automáticamente al cambiar de ruta (para móviles)
  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvasSidebar');
    if (offcanvasElement) {
      // Intentamos cerrar usando el botón de cierre nativo para no depender del objeto global de bootstrap
      const closeBtn = offcanvasElement.querySelector('.btn-close');
      if (window.getComputedStyle(offcanvasElement).visibility !== 'hidden') {
        closeBtn?.click();
      }
    }
  }, [location]);

  return (
    <div className="container-fluid p-0 min-vh-100 d-flex flex-column flex-lg-row">

      {/* 1. Navbar Móvil (Visible solo en < 992px) */}
      <nav className="navbar navbar-dark bg-sidebar d-lg-none px-3 shadow-sm sticky-top">
        <div className="container-fluid p-0">
          <Link className="navbar-brand fw-bold" to="/">Mi App</Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* 2. Sidebar de Escritorio (Visible solo en >= 992px) */}
      <aside className="bg-sidebar p-3 vh-100 shadow d-none d-lg-block sticky-top" style={{ width: "280px", minWidth: "280px" }}>
        <SidebarContent />
      </aside>

      {/* 3. Sidebar Móvil (Offcanvas - se abre desde la izquierda) */}
      <div className="offcanvas offcanvas-start bg-sidebar text-sidebar d-lg-none" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel" style={{ width: "280px" }}>
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title fw-bold" id="offcanvasSidebarLabel">Menú Principal</h5>
          <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-3">
          <SidebarContent isMobile />
        </div>
      </div>

      {/* 4. Contenido Principal */}
      <main className="flex-grow-1 p-3 p-lg-4 bg-light overflow-auto vh-100">
        <div className="card shadow-sm border-0 p-3 h-100 overflow-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

/**
 * Componente interno para reutilizar el contenido del Sidebar
 */
const SidebarContent = ({ isMobile = false }) => {
  return (
    <>
      {!isMobile && <h4 className="text-sidebar mb-4 border-bottom pb-2 text-center fw-bold">Mi App</h4>}

      <div className="accordion accordion-flush" id={isMobile ? "accordionSidebarMobile" : "accordionSidebarDesktop"}>
        {menuConfig.map((item) => (
          <div className="accordion-item bg-transparent border-0" key={item.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-sidebar shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${isMobile ? 'm-' : 'd-'}${item.id}`}
              >
                <i className={`bi ${item.icon} me-2`}></i> {item.title}
              </button>
            </h2>
            <div id={`${isMobile ? 'm-' : 'd-'}${item.id}`} className="accordion-collapse collapse" data-bs-parent={`#${isMobile ? "accordionSidebarMobile" : "accordionSidebarDesktop"}`}>
              <div className="accordion-body p-0 ps-4">
                <ul className="nav flex-column">
                  {item.links.map((link, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        className="nav-link text-sidebar py-2 d-flex align-items-center"
                        to={link.to}
                      >
                        <i className={`bi ${link.icon} me-2`}></i> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;