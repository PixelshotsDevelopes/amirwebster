require('dotenv').config()
const express = require("express");
const path = require("path");
require("./db/conn");
const Websteruser = require("./models/userchema")
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8080

//setting staticpath using path core module
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//MIDDLE_WARE
//using  static files using express.static 
app.use(express.static(staticpath))
//Setting bootstrap path
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
//using and setting js file of bootstrap
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
//using and setting jquery path
app.use('/jquery', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
//to get form data and use json tell express
app.use(express.urlencoded({extended:false}));
//tell express to use json
app.use(express.json());


//setting up view engine
app.set("view engine", "hbs");
//set template path changing views folder to template
app.set("views", templatepath);
//regiter partials path need to require hbs
hbs.registerPartials(partialpath)


//routing
// app.get(path, callback)
app.get("/",(req,res)=>{
    res.render("index")
});
// app.get("/contact",(req,res)=>{
//     res.render("contact")
// });
app.post("/contact", async(req,res)=>{
     try{
        // res.send(req.body);
        const userData =  new Websteruser(req.body);
       await userData.save();
         res.status(201).render("index");
         console.log(userData);
     }catch(error){
        res.status(500).send();
        console.log(error)
     }
});

app.listen(port,()=>{
    console.log(`express app running on port number ${port}`)
})
