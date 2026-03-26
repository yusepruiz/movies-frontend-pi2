import { genreServices } from "@/modules/genre/services/genreServices.js";
import { ListLayout } from "@/components/layout/ListLayout.jsx";
import { GenericList } from "@/components/common/GenericList.jsx";

/**
 * Página principal del módulo de Géneros.
 * Muestra el listado de todos los géneros registrados.
 * 
 * @returns {JSX.Element} La página de listado de géneros.
 */
export const GenreListPage = () => {
    const genresPromise = genreServices.getAll();

    return (
        <ListLayout
            title="Listado de Géneros"
            createLink="/genre/create"
        >
            <GenericList
                promise={genresPromise}
                resourcePath="genre"
                emptyMessage="No hay géneros registrados."
            />
        </ListLayout>
    );
}
