import { useTypeForm } from "@/modules/type/hooks/useTypeForm.js";
import { FormLayout } from "@/components/layout/FormLayout.jsx";
import { FormInput } from "@/components/common/FormInput.jsx";
import { FormTextArea } from "@/components/common/FormTextArea.jsx";


/**
 * Componente de formulario para la creación y actualización de tipos de películas.
 * Utiliza el hook `useTypeForm` para centralizar la lógica y el estado.
 * 
 * @returns {JSX.Element} El formulario de tipos de películas renderizado.
 */
export const TypeForm = () => {
    const {
        name, setName, description, setDescription,
        loading, handleSubmit,
        isEditMode, responseState
    } = useTypeForm();

    return (
        <FormLayout
            title={isEditMode ? "Actualizar Tipo de Película" : "Crear Tipo de Película"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/type"
            text="tipos de películas"
        >
            {/* Contenedor principal de campos */}
            <div className="row g-3">

                {/* PRIMERA FILA: Nombre y Switch */}
                <div className="col-12 col-md-8">
                    <FormInput
                        label="Nombre del Tipo de Película"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del Tipo de Película"
                        required
                    />
                </div>


                {/* SEGUNDA FILA: Descripción */}
                <div className="col-12">
                    <FormTextArea
                        label="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Escribe una breve descripción del tipo de película..."
                        rows={4}
                    />
                </div>

            </div>
        </FormLayout>
    );
};