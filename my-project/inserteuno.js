const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://mongodb:27017/myapp' ;
const client = new MongoClient(uri);
async function run() {
try {
    const database = client.db(dbName);
    const movies = database.collection("recipes");
    const doc = {
        nombreReceta: "Brownie grande",
        dificultad: 1,
        ingredientes:[["manteca", "100gr"], ["chocolate", "150gr"], ["huevos", "2"], ["azucar", "1 taza"], ["nueces picadas", "1/2 taza"], ["harina", "100gr"]],
        pasos:[["Paso 1: Para comenzar con nuestra receta de brownies de chocolate, vamos a colocar la manteca y el chocolate picados en una sartén, y llevarlos a fuego bien bajo. Lo tapamos y vamos a dejarlo por unos 5 minutos sin tocar"],["Paso 2: Ahora retirar del fuego y revolver los ingredientes hasta que esté todo derretido e integrado"], ["Paso 3: A parte vamos a batir los 2 huevos con el azúcar hasta que queden bien blancos, esto es clave para que el brownie casero quede bien húmedo."],["Paso 4: Agregar el chocolate derretido y batir hasta que esté integrado. Sumar las nueces en pedazos grandes o como más les guste."], ["Paso 5: Sumar el harina 0000 tamizada en dos partes e integrar todo como se ve en el video. Es importante batir fuerte antes de pasar el brownie de chocolate al molde."],["Paso 6: Colocar en una placa y cocinar al horno fuerte (200-220°) por 20 minutos."]]
    }
    const result_insert = await movies.insertOne(doc);
console.log(result_insert);
} finally {
// Ensures that the client will close when you finish/error
await client.close(); } }
run().catch(console.dir);
