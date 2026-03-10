/**
 * Página principal del módulo de Géneros.
 * Muestra el listado de todos los géneros registrados.
 * 
 * @returns {JSX.Element} La página de listado de géneros.
 */
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
