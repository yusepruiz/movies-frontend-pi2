import { DirectorListPage } from "@/modules/director/pages/DirectorListPage.jsx";
import { DirectorCreatePage } from "@/modules/director/pages/DirectorCreatePage.jsx";
import { DirectorUpdatePage } from "@/modules/director/pages/DirectorUpdatePage.jsx";

/**
 * Definición de las rutas para el módulo de Directores.
 */
export const directorRoutes = [
    {
        path: "director",
        element: <DirectorListPage />,
    },
    {
        path: "director/create",
        element: <DirectorCreatePage />,
    },
    {
        path: "director/update/:id",
        element: <DirectorUpdatePage />,
    },
];