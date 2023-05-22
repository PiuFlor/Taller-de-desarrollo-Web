const { MongoClient } = require("mongodb");
const dbName = 'test'; const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
    try {
    const database = client.db(dbName);
    const recipes = database.collection("recipes");
    // query for movies that have a runtime less than 15 minutes
    //const query = { runtime: { $lt: 15 } };
    const query = { dificultad: 1 };
    const options = {
    // sort returned documents in ascending order by title (A->Z)
    sort: { nombreReceta: 1 },
    // Include only the `title` and `imdb` fields in each returned document
    projection: { _id: 0, dificultad: 1, nombreReceta: 1 },
    };
    const cursor = recipes.find(query, options);
    // print a message if no documents were found
    if ((await recipes.countDocuments(query)) === 0) {
    console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
    } finally { await client.close(); }}
run().catch(console.dir);
