import { Outlet, Link } from 'react-router';
import { menuConfig } from '@/routes/menuConfig';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex">

        {/* Sidebar */}
        <nav className="bg-sidebar p-3 vh-100 shadow" style={{ width: "280px", minWidth: "280px", position: "sticky", top: 0 }}>
          <h4 className="text-sidebar mb-4 border-bottom pb-2 text-center">Mi App</h4>

          {/* Contenedor del Acordeón */}
          <div className="accordion accordion-flush" id="accordionSidebar">
            {menuConfig.map((item) => (
              <div className="accordion-item bg-transparent border-0" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent text-sidebar shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                  >
                    <i className={`bi ${item.icon} me-2`}></i> {item.title}
                  </button>
                </h2>
                <div id={item.id} className="accordion-collapse collapse" data-bs-parent="#accordionSidebar">
                  <div className="accordion-body p-0 ps-4">
                    <ul className="nav flex-column">
                      {item.links.map((link, index) => (
                        <li className="nav-item" key={index}>
                          <Link className="nav-link text-sidebar py-2" to={link.to}>
                            <i className={`bi ${link.icon} me-2`}></i> {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {/* Sección: Directores */}
            {/* <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-sidebar shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menuDirector"
                >
                  <i className="bi bi-people me-2"></i> Directores
                </button>
              </h2>
              <div id="menuDirector" className="accordion-collapse collapse" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0 ps-4">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link text-sidebar py-2" to="/director">
                        <i className="bi bi-list-ul me-2"></i> Listar Directores
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-sidebar py-2" to="/director/create">
                        <i className="bi bi-plus-circle me-2"></i> Crear Director
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Sección: Películas (Movies) */}
            {/* <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-sidebar shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menuMovies"
                >
                  <i className="bi bi-film me-2"></i> Películas
                </button>
              </h2>
              <div id="menuMovies" className="accordion-collapse collapse" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0 ps-4">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link text-sidebar py-2" to="/movies">
                        <i className="bi bi-collection-play me-2"></i> Ver Todo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="flex-grow-1 p-4 bg-light overflow-auto vh-100">
          <div className="card shadow-sm border-0 p-3 h-100 overflow-auto">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;