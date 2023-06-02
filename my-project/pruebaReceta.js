const mongoose = require('mongoose'); 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongodb:27017/myapp');

  const recetaSchema = new mongoose.Schema({
    nombreReceta: String,
    dificultad: Number,
    chef: String,
    imagen: String,
    ingredientes: [],
    categoria: [],
    pasos: [],
  });
  recetaSchema.methods.speak = function speak() {
    const greeting = this.nombreReceta
      ? 'La receta es ' + this.nombreReceta
      : 'I don\'t have a name';
    console.log(greeting);
  };

  const Receta = mongoose.model('Receta', recetaSchema);


  //let ingredientes: [{ ingrediente: "harina leudante", cantidad: "1 taza"}, {"huevo", "1" }, {"aceite de oliva", "una cuchara" },{ "leche", "3/4 de tazas" }]
  const Panqueques = new Receta({ nombreReceta: 'Panqueques' }, {dificultad: 2}); /*{chef: "Hanna Montana"}, {imagen: "imagenPanqueques"},
  {ingredientes: [[ "harina leudante", "1 taza" ],[ "huevo", 1 ],[ "aceite de oliva", "una cuchara" ],[ "leche", "3/4 de tazas" ]]},
  {categoria:["Postre", "Desayuno", "Merienda", "Dulce"]},
  {pasos:[["Paso 1: En un recipiente de regular tamaño bate el azúcar con los huevos, puedes hacerlo a mano o utilizar una batidora eléctrica, el único requerimiento es hacerlo hasta que la mezcla crezca hasta casi el doble."],["Paso 2: Coloca la harina en un bol y añade el huevo y la leche. Mezcla bien hasta que se integren estos ingredientes y no queden casi grumos. (Truco: Puedes usar leche entera o semidesnatada, de vaca o vegetal)."],["Paso 3: Para terminar de hacer la masa de los panqueques caseros, agrega un chorrito de aceite y mezcla bien. Verás que el aceite hace que se terminen de disolver los grumos de harina y quede una masa lisa y homogénea. (Truco: Si la masa está muy espesa puedes añadir un poco más de leche)."],["Paso 4: Para hacer los panqueques, calienta una sartén a fuego medio-bajo con un poquito de aceite o mantequilla. Cuando la sartén esté caliente, añade una cucharada de mezcla y déjala al fuego hasta que empiecen a salir burbujas en la superficie, entonces dale la vuelta y cocina por el otro lado."],["Paso 5: Para servir la receta de panqueques súper fáciles de hacer, añade un poquito de mantequilla y miel y a disfrutar. Si quieres comerlos con algo salado, puedes servirlos con bacon y huevos fritos o un revuelto con jamón."]]});
  */
  console.log(Panqueques.nombreReceta); // 'Panqueques'

  
  Panqueques.speak();
  await Panqueques.save();
  Panqueques.speak();
    const Recetas = await Receta.find();
    console.log(Recetas);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}