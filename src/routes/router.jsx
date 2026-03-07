import { createBrowserRouter } from "react-router";

import App from "@/App";
import { directorRoutes } from "@/modules/director/routes/director.routes";
import { genderRoutes } from "@/modules/gender/routes/gender.routes";
import { mediaRoutes } from "@/modules/media/routes/media.routes";
import { producerRoutes } from "@/modules/producer/routes/producer.routes";
import { typeRoutes } from "@/modules/type/routes/type.routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [...directorRoutes, ...genderRoutes, ...mediaRoutes, ...producerRoutes, ...typeRoutes],
    },
]);