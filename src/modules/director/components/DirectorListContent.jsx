import { use } from "react";
import { Link } from "react-router";

/**
 * Componente que consume la promesa de los directores
 * 
 * @param {Promise} directorsPromise - Promesa de los directores
 * @returns {JSX.Element}
 */
export const DirectorListContent = ({ directorsPromise }) => {
    const data = use(directorsPromise);

    const list = Array.isArray(data) ? data : data.affectedRows;

    if (list.length === 0) return <p className="mt-3">No hay directores registrados.</p>;

    return (
        <ul className="list-group mt-3">
            {list.map(({ id, name }) => (
                <li key={id} className="list-group-item d-flex align-items-center">
                    <span className="badge bg-primary rounded-pill me-3">ID: {id}</span>
                    {name}
                    <div className="ms-auto">
                        <Link to={`/director/update/${id}`} className="btn btn-sm btn-warning me-2 px-2 py-1" title="Editar"><i className="bi bi-pencil me-2"></i>Editar</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};