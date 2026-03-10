import { GenderForm } from "@/modules/gender/components/GenderForm";

/**
 * Página para la creación de un nuevo género.
 * Renderiza el componente GenderForm en modo creación.
 * 
 * @returns {JSX.Element} La página de creación de géneros.
 */
export const GenderCreatePage = () => {
    return (
        <GenderForm />
    );
}