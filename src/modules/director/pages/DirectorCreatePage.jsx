import { useDirectorActions } from "@/modules/director/hooks/useDirectorActions";
import { DirectorForm } from "@/modules/director/components/DirectorForm";

export const DirectorCreatePage = () => {

    const { createState, createAction, isCreating } = useDirectorActions();

    const props = {
        title: "Crear Director",
        action: createAction,
        loading: isCreating,
        state: createState,
        actionText: "Crear",
        procesingText: "Creando..."
    }

    return (
        <DirectorForm {...props} />
    );
};
