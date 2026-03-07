import { useDirectorActions } from "@/modules/director/hooks/useDirectorActions";
import { DirectorForm } from "@/modules/director/components/DirectorForm";

export const DirectorUpdatePage = () => {

    const { updateState, updateAction, isUpdating } = useDirectorActions();

    const props = {
        title: "Actualizar Director",
        action: updateAction,
        loading: isUpdating,
        state: updateState,
        actionText: "Actualizar",
        procesingText: "Actualizando..."
    }

    return (
        <DirectorForm {...props} />
    );
};