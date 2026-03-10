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
            title="Listado de Géneros"
            createLink="/producer/create"
        >
            <GenericList
                promise={producersPromise}
                resourcePath="gender"
                emptyMessage="No hay géneros registrados."
            />
        </ListLayout>
    );
}
