import { typeServices } from "@/modules/type/services/typeServices";
import { ListLayout } from "@/components/layout/ListLayout";
import { GenericList } from "@/components/common/GenericList";

/**
 * Página principal del módulo de Tipos de Película.
 * Muestra el listado de todos los tipos registrados.
 * 
 * @returns {JSX.Element} La página de listado de tipos.
 */
export const TypeListPage = () => {
    const typesPromise = typeServices.getAll();

    return (
        <ListLayout
            title="Listado de Tipos de Película"
            createLink="/type/create"
        >
            <GenericList
                promise={typesPromise}
                resourcePath="type"
                emptyMessage="No hay tipos de película registrados."
            />
        </ListLayout>
    );
}
