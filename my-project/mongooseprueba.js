const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongodb:27017/myapp');

  const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const Batman = new Kitten({ name: 'Batman' });
  console.log(Batman.name); // 'Batman'

  
  Batman.speak();
  await Batman.save();
    Batman.speak();
    const kittens = await Kitten.find();
    console.log(kittens);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}