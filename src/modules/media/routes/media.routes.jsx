import { MediaListPage } from "@/modules/media/pages/MediaListPage.jsx";
import { MediaCreatePage } from "@/modules/media/pages/MediaCreatePage.jsx";
import { MediaUpdatePage } from "@/modules/media/pages/MediaUpdatePage.jsx";
/**
 * Definición de las rutas para el módulo de Multimedia.
 */
export const mediaRoutes = [
    {
        path: "media",
        element: <MediaListPage />,
    },
    {
        path: "media/create",
        element: <MediaCreatePage />,
    },
    {
        path: "media/update/:id",
        element: <MediaUpdatePage />,
    },
];