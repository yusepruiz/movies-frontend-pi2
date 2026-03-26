import { FormLayout } from "@/components/layout/FormLayout.jsx";
import { FormInput } from "@/components/common/FormInput.jsx";
import { FormSwitch } from "@/components/common/FormSwitch.jsx";
import { useDirectorForm } from "@/modules/director/hooks/useDirectorForm.js";

/**
 * Componente de formulario para la creación y actualización de directores.
 * Utiliza el hook `useDirectorForm` para centralizar la lógica y el estado.
 * 
 * @returns {JSX.Element} El formulario de directores renderizado.
 */
export const DirectorForm = () => {
    const { name, setName, isActive, colorIsActive, toggleState, loading, handleSubmit, isEditMode, responseState } = useDirectorForm();

    return (
        <FormLayout
            title={isEditMode ? "Actualizar Director" : "Crear Director"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/director"
            text="directores"
        >
            <div className="row g-3">

                <div className="col-12 col-md-8">

                    <FormInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del Director"
                        required
                    />
                </div>

                <div className="col-12 col-md-4 d-flex align-items-end pb-2">

                    <FormSwitch
                        id="switchDirector"
                        isActive={isActive}
                        onChange={toggleState}
                        colorIsActive={colorIsActive}
                    />
                </div>
            </div>
        </FormLayout >
    );
};