import { alerts } from "@/utils/alerts";

export const useDelete = (deleteFn) => {
    const handleDelete = async (item) => {

        const displayName = item.title || item.name || `ID: ${item.id}`;

        const result = await alerts.confirmDelete(displayName);

        if (result.isConfirmed) {
            try {
                await deleteFn(item.id);
                await alerts.success("Eliminado correctamente");
                window.location.reload(); // Refrescamos para ver los cambios
            } catch (error) {
                alerts.error("No se pudo eliminar el registro.");
            }
        }
    };

    return { handleDelete };
};