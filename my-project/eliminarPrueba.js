const { MongoClient } = require("mongodb");
const dbName = 'test'; const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db(dbName);
        const movies = database.collection("movies");
        // Query for a movie that has the title 'The Room'
        const query = { title: "Back to the Future"};
        const movie = await movies.deleteMany(query);
        // since this method returns the matched document, not a cursor, print it directly
        console.log(movie);
    } finally { await client.close(); } }
run().catch(console.dir);
