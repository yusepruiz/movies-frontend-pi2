import { ProducerListPage } from "@/modules/producer/pages/ProducerListPage.jsx";
import { ProducerCreatePage } from "@/modules/producer/pages/ProducerCreatePage.jsx";
import { ProducerUpdatePage } from "@/modules/producer/pages/ProducerUpdatePage.jsx";

/**
 * Definición de las rutas para el módulo de Productores.
 */
export const producerRoutes = [
    {
        path: "producer",
        element: <ProducerListPage />,
    },
    {
        path: "producer/create",
        element: <ProducerCreatePage />,
    },
    {
        path: "producer/update/:id",
        element: <ProducerUpdatePage />,
    },
];