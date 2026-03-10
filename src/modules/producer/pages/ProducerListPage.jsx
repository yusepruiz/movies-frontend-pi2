import { producerServices } from "@/modules/producer/services/producerServices";
import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";

/**
 * Página de marcador de posición para la gestión de productoras.
 * 
 * @returns {JSX.Element} La página de productoras.
 */
export const ProducerListPage = () => {
    const producersPromise = producerServices.getAll();

    return (
        <ListLayout
            title="Listado de Productores"
            createLink="/producer/create"
        >
            <GenericList
                promise={producersPromise}
                resourcePath="producer"
                emptyMessage="No hay productores registrados."
            />
        </ListLayout>
    );
}
