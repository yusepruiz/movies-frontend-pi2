import { Link } from 'react-router-dom';
import { menuConfig } from '@/routes/menuConfig';

export const Sidebar = () => {
  return (
    <nav className="bg-sidebar p-3 vh-100 shadow" style={{ width: "280px", minWidth: "280px", position: "sticky", top: 0 }}>
      <h4 className="text-sidebar mb-4 border-bottom pb-2 text-center">Mi App</h4>
      
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
      </div>
    </nav>
  );
};