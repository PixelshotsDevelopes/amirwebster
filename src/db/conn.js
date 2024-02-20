
const mongoose = require('mongoose');
main().then(()=>{
    console.log("Mongoose connection succesful");
}).catch(err => console.log(err));


//creating a db;
async function main() {
  await mongoose.connect(process.env.MONGOURI);  
}
