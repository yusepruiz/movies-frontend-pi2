import { GenreListPage } from "@/modules/genre/pages/GenreListPage.jsx";
import { GenreCreatePage } from "@/modules/genre/pages/GenreCreatePage.jsx";
import { GenreUpdatePage } from "@/modules/genre/pages/GenreUpdatePage.jsx";


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