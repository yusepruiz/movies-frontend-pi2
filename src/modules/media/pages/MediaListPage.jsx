import { useEffect, useState } from "react";
import { mediaServices } from "@/modules/media/services/mediaServices";
import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";
import { genderServices } from "@/modules/gender/services/genderServices";
import { directorServices } from "@/modules/director/services/directorServices";
import { producerServices } from "@/modules/producer/services/producerServices";
import { typeServices } from "@/modules/type/services/typeServices";

/**
 * Página principal del módulo de Medios.
 * Muestra el listado de todos los medios registrados.
 * 
 * @returns {JSX.Element} La página de listado de medios.
 */
export const MediaListPage = () => {
    const mediaPromise = mediaServices.getAll();

    // renderItem wrapper component that fetches related records by ID
    const MediaListItem = ({ item }) => {
        // calls to backend services by id – these return a single object

        const [dataIds, setDataIds] = useState({
            genre: null,
            director: null,
            producer: null,
            type: null
        });

        useEffect(() => {

            const fetchGenre = async () => {
                try {
                    const genre = await genderServices.getById(item.genre_id);
                    const director = await directorServices.getById(item.director_id);
                    const producer = await producerServices.getById(item.producer_id);
                    const type = await typeServices.getById(item.type_id);
                    const promises = [genre, director, producer, type];
                    const [genreData, directorData, producerData, typeData] = await Promise.all(promises);

                    const { name: genreName } = genreData.affectedRows[0];
                    const { name: directorName } = directorData.affectedRows[0];
                    const { name: producerName } = producerData.affectedRows[0];
                    const { name: typeName } = typeData.affectedRows[0];

                    setDataIds({
                        genre: genreName,
                        director: directorName,
                        producer: producerName,
                        type: typeName
                    });

                } catch (error) {
                    console.error("Error fetching genre:", error);
                }
            };
            fetchGenre();
        }, [item.genre_id, item.director_id, item.producer_id, item.type_id]);

        return (
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.title}
                            className="me-3"
                            style={{ width: '50px', height: '75px', objectFit: 'cover' }}
                        />
                    )}
                    <div>
                        <h5 className="mb-1">{item.title}</h5>
                        <small className="text-muted">ID: {item.id} | Año: {item.release_year}</small>
                    </div>
                </div>
                <p className="mb-2">{item.synopsis}</p>
                <div className="row">
                    <div className="col-md-6">
                        <strong>URL:</strong>{' '}
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.url}
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <strong>Género:</strong> {dataIds.genre}
                </div>
                <div className="col-md-6">
                    <strong>Director:</strong> {dataIds.director}
                </div>
                <div className="col-md-6">
                    <strong>Productor:</strong> {dataIds.producer}
                </div>
                <div className="col-md-6">
                    <strong>Tipo:</strong> {dataIds.type}
                </div>
                <div className="mt-2">
                    <small className="text-muted">
                        Creado: {new Date(item.creation_date).toLocaleDateString()} |
                        {' '}Actualizado: {new Date(item.update_date).toLocaleDateString()}
                    </small>
                </div>
            </div>
        );
    };

    const renderMediaItem = (item) => <MediaListItem item={item} />;

    return (
        <ListLayout title="Listado de Medios" createLink="/media/create">
            <GenericList
                promise={mediaPromise}
                resourcePath="media"
                emptyMessage="No hay medios registrados."
                renderItem={renderMediaItem}
            />
        </ListLayout>
    );
};