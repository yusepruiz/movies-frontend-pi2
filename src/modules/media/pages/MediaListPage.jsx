import { mediaServices } from "@/modules/media/services/mediaServices.js";
 
import { useCatalogs } from "@/hooks/useCatalogs.js";
import { useDelete } from "@/hooks/useDelete.js";
 
import { ListLayout } from "@/components/layout/ListLayout.jsx";
import { GenericList } from "@/components/common/GenericList.jsx";
import { MediaCard } from "@/modules/media/components/MediaCard.jsx";
 
import { getNameById } from "@/utils/catalogHelpers.js";

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