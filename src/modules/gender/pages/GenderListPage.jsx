import { genderServices } from "@/modules/gender/services/genderServices";
import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";


export const GenderListPage = () => {
    const gendersPromise = genderServices.getAll();

    return (
        <ListLayout
            title="Listado de Géneros"
            createLink="/gender/create"
        >
            <GenericList
                promise={gendersPromise}
                resourcePath="gender"
                emptyMessage="No hay géneros registrados."
            />
        </ListLayout>
    );
}
