import { use } from "react";
import { Link } from "react-router";

export const GenericList = ({
    promise,
    emptyMessage = "No hay registros.",
    resourcePath,
    renderItem,
    onDelete // Si se pasa esta prop, se habilita el borrado
}) => {
    const data = use(promise);
    const list = Array.isArray(data) ? data : (data.affectedRows || []);

    if (list.length === 0) return <p className="mt-3 text-muted">{emptyMessage}</p>;

    return (
        <ul className="list-group mt-3 shadow-sm">
            {list.map((item) => (
                <li key={item.id} className="d-block-custom list-group-item d-flex align-items-center py-3">

                    <div className="flex-grow-1">
                        {renderItem ? (
                            renderItem(item)
                        ) : (
                            <>
                                <span className="badge bg-secondary rounded-pill me-3">ID: {item.id}</span>
                                <span className="fw-bold">{item.name}</span>
                                {item.description && (
                                    <small className="d-block text-muted">{item.description}</small>
                                )}
                            </>
                        )}
                    </div>

                    {/* SECCIÓN DE ACCIONES CENTRALIZADA */}
                    <div className="ms-auto d-flex flex-column gap-2 justify-content-start pt-3">
                        <Link
                            to={`/${resourcePath}/update/${item.id}`}
                            className="btn btn-sm btn-warning px-2 py-1"
                            style={{ height: 'fit-content' }} // Forzamos a que solo ocupe su contenido
                        >
                            <i className="bi bi-pencil me-2"></i>Editar
                        </Link>

                        {
                            onDelete && (
                                <button
                                    onClick={() => onDelete(item)}
                                    className="btn btn-sm btn-danger px-2 py-1" 
                                    style={{ height: 'fit-content' }} // Forzamos a que solo ocupe su contenido
                                >
                                    <i className="bi bi-trash me-2"></i>Eliminar
                                </button>

                            )
                        }
                    </div>


                </li>
            ))}
        </ul>
    );
};