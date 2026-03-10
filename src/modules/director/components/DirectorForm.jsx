import { FormLayout } from "@/components/layout/FormLayout";
import { FormInput } from "@/components/common/FormInput";
import { FormSwitch } from "@/components/common/FormSwitch";
import { useDirectorForm } from "@/modules/director/hooks/useDirectorForm";

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
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                <FormInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del Director"
                    required
                />
                <FormSwitch
                    id="switchDirector"
                    isActive={isActive}
                    onChange={toggleState}
                    colorIsActive={colorIsActive}
                />
            </div>
        </FormLayout>
    );
};