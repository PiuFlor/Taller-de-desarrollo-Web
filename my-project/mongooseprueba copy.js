const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongodb:27017/myapp');

  const recetaSchema = new mongoose.Schema({
    name: String
  });
  

  const Receta = mongoose.model('Receta', recetaSchema);

  const Batman = new Receta({ name: 'Batman' });
  console.log(Batman.name); // 'Batman'

  
  
  await Batman.save();
    
    const kittens = await Receta.find();
    console.log(kittens);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}