const { default: mongoose } = require("mongoose");

main().catch(err => console.log(err));

async function main () {
    await mongoose.connect('mongodb://mongodb:27017/myapp');
    const recetaSchema = new mongoose.Schema({
        nombreReceta:String,
    });

const Receta = mongoose.model('Receta', recetaSchema);
const Panquek = new Receta({nombreReceta: 'Panquek'});
console.log(Panquek.nombreReceta);
await Panquek.save();
const Recetas = await Receta.find();
console.log(Recetas);
}