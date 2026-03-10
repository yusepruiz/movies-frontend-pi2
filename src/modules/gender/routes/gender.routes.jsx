import { GenderListPage } from "@/modules/gender/pages/GenderListPage";
import { GenderCreatePage } from "@/modules/gender/pages/GenderCreatePage";
import { GenderUpdatePage } from "@/modules/gender/pages/GenderUpdatePage";


/**
 * Definición de las rutas para el módulo de Géneros.
 */
export const genderRoutes = [
    {
        path: "gender",
        element: <GenderListPage />,
    },
    {
        path: "gender/create",
        element: <GenderCreatePage />,
    },
    {
        path: "gender/update/:id",
        element: <GenderUpdatePage />,
    },
];