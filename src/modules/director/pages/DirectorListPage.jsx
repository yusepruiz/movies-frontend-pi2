import { directorServices } from "@/modules/director/services/directorServices";
import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";

/**
 * Página principal del módulo de Directores.
 * Muestra el listado de todos los directores registrados.
 * 
 * @returns {JSX.Element} La página de listado de directores.
 */
export const DirectorListPage = () => {
    const directorsPromise = directorServices.getAll();

    return (
        <ListLayout title="Listado de Directores" createLink="/director/create">
            <GenericList
                promise={directorsPromise}
                resourcePath="director"
                emptyMessage="No hay directores registrados."
            />
        </ListLayout>
    );
};