const { MongoClient } = require("mongodb");
const dbName = 'test'; const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db(dbName);
        const movies = database.collection("movies");
        // Query for a movie that has the title 'The Room'
        const query = { title: "Back to the Future" };
        const options = {
        // sort matched documents in descending order by rating
        sort: { "imdb.rating": -1 },
        // Include only the `title` and `imdb` fields in the returned document
        projection: { _id: 0, title: 1, imdb: 1 },
        };
        const movie = await movies.findOne(query,options);
        // since this method returns the matched document, not a cursor, print it directly
        if (movie != null)
            console.log(movie);
        else
            console.log("No existen documentos con esos parametros");
    } finally { await client.close(); } }
run().catch(console.dir);