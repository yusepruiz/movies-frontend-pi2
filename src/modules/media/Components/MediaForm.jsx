import { FormLayout } from "@/components/layout/FormLayout";
import { FormInput } from "@/components/common/FormInput";
import { FormSelect } from "@/components/common/FormSelect";
import { useMediaForm } from "@/modules/media/hooks/useMediaForm";
import { directorsActive } from "@/modules/director/services/directorServices";
import { gendersActive } from "@/modules/gender/services/genderServices";
import { producersActive } from "@/modules/producer/services/producerServices";
import { typeServices } from "@/modules/type/services/typeServices";
import { useEffect, useState } from "react";

/**
 * Componente de formulario para la creación y actualización de medios.
 * Utiliza el hook `useMediaForm` para centralizar la lógica y el estado.
 * 
 * @returns {JSX.Element} El formulario de medios renderizado.
 */
export const MediaForm = () => {
    const { title, setTitle, synopsis, setSynopsis, release_year, setReleaseYear, url, setUrl, image, setImage, loading, handleSubmit, isEditMode, responseState, } = useMediaForm();

    const [dataIds, setDataIds] = useState({
        genre: { id: "", name: "" },
        director: { id: "", name: "" },
        producer: { id: "", name: "" },
        type: { id: "", name: "" }
    });

    useEffect(() => {

        const fetchGenre = async () => {
            try {
                const director = await directorsActive.getAll();
                const genre = await gendersActive.getAll();
                const producer = await producersActive.getAll();
                const type = await typeServices.getAll();

                const promises = [genre, director, producer, type];
                // const [genreData, directorData, producerData, typeData] = await Promise.all(promises);
                const e = await Promise.all(promises);

                console.log(e);

                // const { name: genreName, id: genreId } = genreData.affectedRows[0];
                // const { name: directorName, id: directorId } = directorData.affectedRows[0];
                // const { name: producerName, id: producerId } = producerData.affectedRows[0];
                // const { name: typeName, id: typeId } = typeData.affectedRows[0];

                // setDataIds({
                //     genre: { id: genreId, name: genreName },
                //     director: { id: directorId, name: directorName },
                //     producer: { id: producerId, name: producerName },
                //     type: { id: typeId, name: typeName }
                // });

                // console.log(dataIds.genre);

            } catch (error) {
                console.error("Error fetching genre:", error);
            }
        };
        fetchGenre();
    }, []);


    return (
        <FormLayout
            title={isEditMode ? "Actualizar Media" : "Crear Media"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/media"
            text="medios"
        >
            <div className="row g-3">

                <div className="col-12 col-md-6">

                    <FormInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nombre del Media"
                        required
                    />
                </div>

                <div className="col-12 col-md-6">

                    <FormInput
                        value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)}
                        placeholder="Sinopsis"
                        required
                    />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-12 col-md-6">

                    <FormInput
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="URL"
                        required
                    />
                </div>
                <div className="col-12 col-md-6">

                    <FormInput
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="URL de la Imagen"
                        required
                    />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-12 col-md-6">

                    <FormInput
                        value={release_year}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        placeholder="Año de Estreno"
                        required
                    />
                </div>

            </div>
            <div className="row g-3">
                <div className="col-12 col-md-6">

                    <FormSelect
                        name="director_id"
                        value={0}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        options={[{ value: 1, label: "Acción" }]} // Aquí deberías cargar las opciones de género desde tu API o estado
                        placeholder="Selecciona un director"
                        required
                    />
                </div>
                <div className="col-12 col-md-6">

                    <FormSelect
                        name="producer_id"
                        value={0}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        options={[{ value: 1, label: "Acción" }]} // Aquí deberías cargar las opciones de género desde tu API o estado
                        placeholder="Selecciona un productor"
                        required
                    />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-12 col-md-6">

                    <FormSelect
                        name="type_id"
                        value={0}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        options={[{ value: 1, label: "Acción" }]} // Aquí deberías cargar las opciones de género desde tu API o estado
                        placeholder="Selecciona un tipo"
                        required
                    />
                </div>
                <div className="col-12 col-md-6">

                    <FormSelect
                        name="genre_id"
                        value={0}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        options={[{ value: 1, label: "Acción" }]} // Aquí deberías cargar las opciones de género desde tu API o estado
                        placeholder="Selecciona un género"
                        required
                    />
                </div>
            </div>
        </FormLayout >
    );
};