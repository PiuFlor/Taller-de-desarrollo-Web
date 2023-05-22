const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
try {
    const database = client.db(dbName);
    const movies = database.collection('movies');
    const doc = {
        title: "Back to the Future",
        year: "1985",
    }
    const result_insert = await movies.insertOne(doc);
console.log(result_insert);
} finally {
// Ensures that the client will close when you finish/error
await client.close(); } }
run().catch(console.dir);