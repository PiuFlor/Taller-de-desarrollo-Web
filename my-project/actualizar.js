const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
try {
    const database = client.db(dbName);
    const movies = database.collection("recipes");
    const filter = {nombreReceta:"Bizcocho casero de yogur"};
    const updateDoc = {$set: 
                        {dificultad: 3},
                     };
    const options = {$currentDate: {lastModified: true}};
    const result_insert = await movies.updateOne(filter, updateDoc, options);
console.log(result_insert);
} finally {
// Ensures that the client will close when you finish/error
await client.close(); } }
run().catch(console.dir);
