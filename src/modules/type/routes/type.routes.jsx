import { TypeListPage } from "@/modules/type/pages/TypeListPage.jsx";
import { TypeCreatePage } from "@/modules/type/pages/TypeCreatePage.jsx";
import { TypeUpdatePage } from "@/modules/type/pages/TypeUpdatePage.jsx";

/**
 * Definición de las rutas para el módulo de Tipos de Contenido.
 */
export const typeRoutes = [
    {
        path: "type",
        element: <TypeListPage />,
    },
    {
        path: "type/create",
        element: <TypeCreatePage />,
    },
    {
        path: "type/update/:id",
        element: <TypeUpdatePage />,
    },
];