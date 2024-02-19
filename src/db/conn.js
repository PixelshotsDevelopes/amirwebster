const mongoose = require('mongoose');
main().then(()=>{
    console.log("Mongoose connection succesful");
}).catch(err => console.log(err));


//creating a db;
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amirdynamic');
}