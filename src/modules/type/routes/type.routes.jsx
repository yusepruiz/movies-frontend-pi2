import { TypeListPage } from "@/modules/type/pages/TypeListPage";
import { TypeCreatePage } from "@/modules/type/pages/TypeCreatePage";
import { TypeUpdatePage } from "@/modules/type/pages/TypeUpdatePage";

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