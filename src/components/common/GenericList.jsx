import { use } from "react";
import { Link } from "react-router";

export const GenericList = ({
    promise,
    emptyMessage = "No hay registros.",
    resourcePath, // Ejemplo: 'director' o 'gender'
    renderItem    // Función opcional por si quieres un diseño especial por ítem
}) => {
    const data = use(promise);

    const list = Array.isArray(data) ? data : (data.affectedRows || []);

    if (list.length === 0) return <p className="mt-3 text-muted">{emptyMessage}</p>;

    return (
        <ul className="list-group mt-3 shadow-sm">
            {list.map((item) => (
                <li key={item.id} className="list-group-item d-flex align-items-center py-3">
                    {/* Si pasas una función personalizada la usamos, si no, usamos un diseño base */}
                    {renderItem ? (
                        renderItem(item)
                    ) : (
                        <>
                            <span className="badge bg-secondary rounded-pill me-3">ID: {item.id}</span>
                            <div className="flex-grow-1">
                                <span className="fw-bold">{item.name}</span>
                                {item.description && (
                                    <small className="d-block text-muted">{item.description}</small>
                                )}
                            </div>
                        </>
                    )}

                    <div className="ms-auto">
                        <Link
                            to={`/${resourcePath}/update/${item.id}`}
                            className="btn btn-sm btn-warning me-2 px-2 py-1"
                            title="Editar"
                        >
                            <i className="bi bi-pencil me-2"></i>Editar
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};