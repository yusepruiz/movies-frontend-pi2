import { use } from "react";
import { directorServices } from "@/modules/director/services/directorServices";

const directorsPromise = directorServices.getDirectors();

export const DirectorListPage = () => {
    const directors = use(directorsPromise);
    console.log(directors);
    return (
        <div>
            <h1>Director List</h1>
            <ul>
                {directors.affectedRows.map((director) => (
                    <li key={director.id}>{director.name}</li>
                ))}
            </ul>
        </div>
    );
};