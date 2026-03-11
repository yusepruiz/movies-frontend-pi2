import { GenreListPage } from "@/modules/genre/pages/GenreListPage";
import { GenreCreatePage } from "@/modules/genre/pages/GenreCreatePage";
import { GenreUpdatePage } from "@/modules/genre/pages/GenreUpdatePage";


/**
 * Definición de las rutas para el módulo de Géneros.
 */
export const genreRoutes = [
    {
        path: "genre",
        element: <GenreListPage />,
    },
    {
        path: "genre/create",
        element: <GenreCreatePage />,
    },
    {
        path: "genre/update/:id",
        element: <GenreUpdatePage />,
    },
];