import { createBrowserRouter } from "react-router";

import App from "@/App.jsx";
import { ErrorPage } from "@/components/common/ErrorPage.jsx";
import { directorRoutes } from "@/modules/director/routes/director.routes.jsx";
import { genreRoutes } from "@/modules/genre/routes/genre.routes.jsx";
import { mediaRoutes } from "@/modules/media/routes/media.routes.jsx";
import { producerRoutes } from "@/modules/producer/routes/producer.routes.jsx";
import { typeRoutes } from "@/modules/type/routes/type.routes.jsx";

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