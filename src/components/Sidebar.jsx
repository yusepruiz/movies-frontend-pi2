import { Link } from 'react-router';
import { menuConfig } from '@/routes/menuConfig';

export const Sidebar = ({ isMobile = false }) => {

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