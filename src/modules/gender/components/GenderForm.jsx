import { useGenderForm } from "@/modules/gender/hooks/useGenderForm";
import { FormLayout } from "@/components/layout/FormLayout";
import { FormInput } from "@/components/common/FormInput";
import { FormSwitch } from "@/components/common/FormSwitch";
import { FormTextArea } from "@/components/common/FormTextArea";

/**
 * Componente de formulario para la creación y actualización de géneros.
 * Utiliza el hook `useGenderForm` para centralizar la lógica y el estado.
 * 
 * @returns {JSX.Element} El formulario de géneros renderizado.
 */
export const GenderForm = () => {
    const {
        name, setName, description, setDescription, isActive,
        colorIsActive, toggleState, loading, handleSubmit,
        isEditMode, responseState
    } = useGenderForm();

    return (
        <FormLayout
            title={isEditMode ? "Actualizar Género" : "Crear Género"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/gender"
            text="géneros"
        >
            {/* Contenedor principal de campos */}
            <div className="row g-3">

                {/* PRIMERA FILA: Nombre y Switch */}
                <div className="col-12 col-md-8">
                    <FormInput
                        label="Nombre del Género"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del Género"
                        required
                    />
                </div>

                <div className="col-12 col-md-4 d-flex align-items-end pb-2">
                    <FormSwitch
                        id="switchGender"
                        isActive={isActive}
                        onChange={toggleState}
                        colorIsActive={colorIsActive}
                    />
                </div>

                {/* SEGUNDA FILA: Descripción */}
                <div className="col-12">
                    <FormTextArea
                        label="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Escribe una breve descripción del género..."
                        rows={4}
                    />
                </div>

            </div>
        </FormLayout>
    );
};