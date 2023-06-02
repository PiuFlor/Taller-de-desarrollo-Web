const { default: mongoose } = require("mongoose");

main().catch(err => console.log(err));

async function main () {
    await mongoose.connect('mongodb://mongodb:27017/myapp');
    const ricetteSchema = new mongoose.Schema({
        nombreReceta:String,
        dificultad: Number,
        chef: String,
        imagen: String,
        ingredientes: [[String, String]],
        categoria: [String],
        pasos: [[String]],
    });

const Ricette = mongoose.model('Ricette', ricetteSchema);

const Recetas = await Ricette.find();
console.log(Recetas);

}