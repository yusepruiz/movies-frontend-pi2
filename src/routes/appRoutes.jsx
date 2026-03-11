import { createBrowserRouter } from "react-router";

import App from "@/App";
import { ErrorPage } from "@/components/common/ErrorPage";
import { directorRoutes } from "@/modules/director/routes/director.routes";
import { genreRoutes } from "@/modules/genre/routes/genre.routes";
import { mediaRoutes } from "@/modules/media/routes/media.routes";
import { producerRoutes } from "@/modules/producer/routes/producer.routes";
import { typeRoutes } from "@/modules/type/routes/type.routes";

/**
 * Configuración central del enrutador de la aplicación.
 * Define las rutas principales y anida las rutas de los módulos específicos.
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [...directorRoutes, ...genreRoutes, ...mediaRoutes, ...producerRoutes, ...typeRoutes],
    },
]);