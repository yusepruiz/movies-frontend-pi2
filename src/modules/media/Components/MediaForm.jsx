import { useMediaForm } from "../hooks/useMediaForm.js";
import { FormLayout } from "@/components/layout/FormLayout.jsx";
import { FormInput } from "@/components/common/FormInput.jsx";
import { FormTextArea } from "@/components/common/FormTextArea.jsx";
import { FormSelect } from "@/components/common/FormSelect.jsx";

/**
 * Componente de formulario para la creación y edición de producciones multimedia.
 * Renderiza campos para título, sinopsis, año y selectores para todos los catálogos.
 * 
 * @returns {JSX.Element} El formulario de medios renderizado.
 */
export const MediaForm = () => {
    const {
        // Estados de los inputs
        formData, handleInputChange,
        // Listas para los selects
        genres, directors, producers, types,
        // Estados de control
        loading, handleSubmit, isEditMode, responseState
    } = useMediaForm();
    // console.log(formData)
    return (
        <FormLayout
            title={isEditMode ? "Editar Película/Serie" : "Nueva Producción"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/media"
            text="películas"
        >
            <div className="row g-3">
                {/* --- SECCIÓN PRINCIPAL --- */}
                <div className="col-md-8">
                    <FormInput
                        label="Título"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Nombre de la obra"
                        required
                    />
                </div>
                <div className="col-md-4">
                    <FormInput
                        label="Año de Estreno"
                        name="release_year"
                        type="number"
                        onInput={(e) => {
                            if (e.target.value.length > 4) {
                                e.target.value = e.target.value.slice(0, 4);
                            }
                        }}
                        value={formData.release_year}
                        onChange={handleInputChange}
                        placeholder="AAAA"
                        required
                    />
                </div>

                {/* --- MULTIMEDIA --- */}
                <div className="col-md-6">
                    <FormInput
                        label="URL del Video"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        placeholder="https://..."
                    />
                </div>
                <div className="col-md-6">
                    <FormInput
                        label="URL de la Imagen (Portada)"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="Ruta de la imagen"
                    />
                </div>

                {/* --- CLASIFICACIÓN (SELECTS) --- */}
                <div className="col-md-3">
                    <FormSelect
                        label="Género"
                        name="genre_id"
                        value={formData.genre_id}
                        onChange={handleInputChange}
                        options={genres}
                        required
                    />
                </div>
                <div className="col-md-3">
                    <FormSelect
                        label="Director"
                        name="director_id"
                        value={formData.director_id}
                        onChange={handleInputChange}
                        options={directors}
                        required
                    />
                </div>
                <div className="col-md-3">
                    <FormSelect
                        label="Productora"
                        name="producer_id"
                        value={formData.producer_id}
                        onChange={handleInputChange}
                        options={producers}
                        required
                    />
                </div>
                <div className="col-md-3">
                    <FormSelect
                        label="Tipo"
                        name="type_id"
                        value={formData.type_id}
                        onChange={handleInputChange}
                        options={types}
                        required
                    />
                </div>

                {/* --- DESCRIPCIÓN --- */}
                <div className="col-12">
                    <FormTextArea
                        label="Sinopsis / Descripción"
                        name="synopsis"
                        value={formData.synopsis}
                        onChange={handleInputChange}
                        placeholder="Resume la trama aquí..."
                        rows={3}
                    />
                </div>
            </div>
        </FormLayout>
    );
};