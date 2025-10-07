import { Client, Query, TablesDB, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const database = new TablesDB(client)

export const updateSearchCount = async(searchTerm, movie) => {

    try{
        const result = await database.listRows({
            databaseId : DATABASE_ID,
            tableId : TABLE_ID,
            queries : [ Query.equal("searchTerm", searchTerm) ]
        })

        if(result.total < 1){
            await database.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(), 
                data: {
                 searchTerm,
                 count: 1,
                 movie_id: movie.id,
                 poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            })
        } else {
            const doc = result.rows[0];
            await database.updateRow(
                DATABASE_ID, 
                TABLE_ID, 
                doc.$id, 
                {
                 count: doc.count + 1,
                }
            )
        }
    } catch(error) {
        console.error(error);
    }

}