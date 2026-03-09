import { Link, Outlet } from 'react-router';
import { Sidebar } from '@/components/Sidebar';
import { useCloseOffcanvas } from '@/hooks/useCloseOffcanvas';

/**
 * Componente de diseño principal de la aplicación.
 * Gestiona la estructura de Sidebar (escritorio) y Navbar + Offcanvas (móvil).
 * También se encarga de cerrar el menú móvil automáticamente al navegar.
 * 
 * @returns {JSX.Element} El diseño base con espacios para la navegación y el contenido principal.
 */
export const MainLayout = () => {
    const ID_OFFCANVAS = 'offcanvasSidebar';

    useCloseOffcanvas(ID_OFFCANVAS);

    return (
        <div className="container-fluid p-0 min-vh-100 d-flex flex-column flex-lg-row">

            {/* 1. Navbar Móvil */}
            <nav className="navbar navbar-dark bg-sidebar d-lg-none px-3 shadow-sm sticky-top">
                <div className="container-fluid p-0">
                    <Link className="navbar-brand fw-bold" to="/">Mi App</Link>
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSidebar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/* 2. Sidebar Escritorio */}
            <aside className="bg-sidebar p-3 vh-100 shadow d-none d-lg-block sticky-top" style={{ width: "280px", minWidth: "280px" }}>
                <Sidebar />
            </aside>

            {/* 3. Sidebar Móvil (Offcanvas) */}
            <div className="offcanvas offcanvas-start bg-sidebar text-sidebar d-lg-none" tabIndex="-1" id="offcanvasSidebar" style={{ width: "280px" }}>
                <div className="offcanvas-header border-bottom border-secondary">
                    <h5 className="offcanvas-title fw-bold">Menú Principal</h5>
                    <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body p-3">
                    <Sidebar isMobile />
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
};