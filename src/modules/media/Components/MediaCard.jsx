/**
 * Componente para mostrar la información de una película o serie en formato de tarjeta.
 * Presenta la imagen, título, sinopsis y detalles del catálogo asociados.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.item - El objeto de datos de la película/serie.
 * @param {Object} props.catalogs - Los catálogos para mapear IDs a nombres descriptivos.
 * @param {Function} props.getName - Función auxiliar para obtener el nombre desde un catálogo por ID.
 * @returns {JSX.Element} La tarjeta de medio renderizada.
 */
export const MediaCard = ({ item, catalogs, getName }) => {
    return (
        <div className="card mb-3 border-0 w-100 py-3">
            <div className="row g-0">
                {/* Columna de la Imagen */}
                <div className="col-md-1 d-flex justify-content-center">
                    <img
                        src={item.image}
                        className="img-fluid rounded"
                        alt={item.title}
                        style={{ maxHeight: '120px', objectFit: 'cover' }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/100x150?text=Sin+Portada';
                        }}
                    />
                </div>

                {/* Columna de Información */}
                <div className="col-md-9 ps-4">
                    <div className="d-flex align-items-center mb-1">
                        <h4 className="card-title mb-0 me-3 fw-bold">{item.title}</h4>
                    </div>

                    <p className="text-muted small mb-2">
                        ID: {item.id} | Año: {item.release_year}
                    </p>

                    <p className="card-text mb-3 text-secondary text-truncate-custom">
                        {item.synopsis}
                    </p>

                    <div className="row g-2">
                        <div className="col-12">
                            <p className="mb-1 text-truncate">
                                <strong>URL:</strong> <a href={item.url} target="_blank" className="text-decoration-none">{item.url}</a>
                            </p>
                        </div>
                        <div className="col-md-6 small">
                            <p className="mb-1"><strong>Género:</strong> {getName(catalogs.genres, item.genre_id)}</p>
                            <p className="mb-1"><strong>Director:</strong> {getName(catalogs.directors, item.director_id)}</p>
                        </div>
                        <div className="col-md-6 small">
                            <p className="mb-1"><strong>Productor:</strong> {getName(catalogs.producers, item.producer_id)}</p>
                            <p className="mb-1"><strong>Tipo:</strong> {getName(catalogs.types, item.type_id)}</p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                            Creado: {new Date(item.creation_date).toLocaleDateString()} |
                            Actualizado: {new Date(item.update_date).toLocaleDateString()}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};