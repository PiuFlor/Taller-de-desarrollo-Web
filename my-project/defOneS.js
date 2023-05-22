// define a schema
var animalSchema = new Schema({ nombreReceta: "Torta frita",
    dificultad: "2",
    pasos: ["Paso 1: En un bowl mezclar harina, polvo de hornear, sal, aceite y hacer un volcán.", 
"Paso 2: Agregar en el centro agua tibia y comenzar a amasar con las manos 10 minutos hasta tomar la masa y formar un bollo liso.",
"Paso 3: Dejar reposar en un bowl tapado por 1 hora y cortar en bollos de 50 gramos. ",
"Paso 4: Estirar con palote dándole forma circular, hacer un tajo en el centro y freír en abundante aceite caliente hasta dorar suavemente.",
"Paso 5: Escurrir sobre papel absorbente y salar. "] });
// assign a function to the "methods" object of our animalSchema
recipes.methods.findSimilarTypes = function (cb) {
return this.model('nombreRecetas').find({ type: this.type }, cb);
}