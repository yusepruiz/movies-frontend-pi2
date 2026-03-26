import { useProducerForm } from "@/modules/producer/hooks/useProducerForm.js";
import { FormLayout } from "@/components/layout/FormLayout.jsx";
import { FormInput } from "@/components/common/FormInput.jsx";
import { FormSwitch } from "@/components/common/FormSwitch.jsx";
import { FormTextArea } from "@/components/common/FormTextArea.jsx";


/**
 * Componente de formulario para la creación y actualización de productores.
 * Utiliza el hook `useProducerForm` para centralizar la lógica y el estado.
 * 
 * @returns {JSX.Element} El formulario de productores renderizado.
 */
export const ProducerForm = () => {
    const {
        name, setName, slogan, setSlogan, description, setDescription, isActive,
        colorIsActive, toggleState, loading, handleSubmit,
        isEditMode, responseState
    } = useProducerForm();

    return (
        <FormLayout
            title={isEditMode ? "Actualizar Productor" : "Crear Productor"}
            onSubmit={handleSubmit}
            loading={loading}
            isEditMode={isEditMode}
            responseState={responseState}
            backTo="/producer"
            text="productores"
        >
            {/* Contenedor principal de campos */}
            <div className="row g-3">

                {/* PRIMERA FILA: Nombre y Switch */}
                <div className="col-12 col-md-8">
                    <FormInput
                        label="Nombre del Productor"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del Productor"
                        required
                    />
                </div>

                <div className="col-12 col-md-4 d-flex align-items-end pb-2">
                    <FormSwitch
                        id="switchProducer"
                        isActive={isActive}
                        onChange={toggleState}
                        colorIsActive={colorIsActive}
                    />
                </div>

                {/* SEGUNDA FILA: Eslogan */}
                <div className="col-12 col-md-8">
                    <FormInput
                        label="Eslogan"
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                        placeholder="Eslogan"
                        required
                    />
                </div>

                {/* TERCERA FILA: Descripción */}
                <div className="col-12">
                    <FormTextArea
                        label="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Escribe una breve descripción de la productora..."
                        rows={4}
                    />
                </div>

            </div>
        </FormLayout>
    );
};