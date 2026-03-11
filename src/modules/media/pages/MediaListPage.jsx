import { mediaServices } from "@/modules/media/services/mediaServices";

import { useCatalogs } from "@/hooks/useCatalogs";

import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";
import { MediaCard } from "@/modules/media/components/MediaCard";

import { getNameById } from "@/utils/catalogHelpers";

export const MediaListPage = () => {
    const mediaPromise = mediaServices.getAll();
    const catalogs = useCatalogs();

    return (
        <ListLayout title="Listado de Películas/Series" createLink="/media/create">
            <GenericList
                promise={mediaPromise}
                resourcePath="media"
                renderItem={(item) => (
                    <MediaCard
                        item={item}
                        catalogs={catalogs}
                        getName={getNameById}
                    />
                )}
                onDelete={(id) => mediaServices.delete(id)} // <--- ¡Y listo!
            />
        </ListLayout >
    );
};