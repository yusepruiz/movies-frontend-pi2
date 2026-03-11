import { MediaListPage } from "@/modules/media/pages/MediaListPage";
import { MediaCreatePage } from "@/modules/media/pages/MediaCreatePage";
import { MediaUpdatePage } from "@/modules/media/pages/MediaUpdatePage";
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