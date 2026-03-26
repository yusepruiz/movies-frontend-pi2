import { mediaServices } from "@/modules/media/services/mediaServices";

import { useCatalogs } from "@/hooks/useCatalogs";
import { useDelete } from "@/hooks/useDelete";

import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";
import { MediaCard } from "@/modules/media/components/MediaCard.jsx";

import { getNameById } from "@/utils/catalogHelpers";

export const MediaListPage = () => {
    const mediaPromise = mediaServices.getAll();
    const catalogs = useCatalogs();

    const { handleDelete } = useDelete(mediaServices.delete);

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
                onDelete={handleDelete}
            />
        </ListLayout >
    );
};