import { DirectorListPage } from "@/modules/director/pages/DirectorListPage";
import { DirectorCreatePage } from "@/modules/director/pages/DirectorCreatePage";
import { DirectorUpdatePage } from "@/modules/director/pages/DirectorUpdatePage";

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