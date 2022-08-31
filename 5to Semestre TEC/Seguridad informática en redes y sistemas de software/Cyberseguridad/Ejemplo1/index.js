const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs")
const multer = require("multer")


const app = express();
app.use(bodyParser.urlencoded({extened:true}));
app.set("view-engine", "ejs");
const uploads=multer({dest: ".temp"})

app.get("/descargar", (req, res) => {
    let files = fs.readdirSync(__dirname+"/.storage")
    res.render("descargar.ejs", {archivos:files})
})


app.post("/descargar", (req, res) => {
    res.download(__dirname+"/.storage"+req.body.documentos, (err)=>{
        if (err) throw err;
    })

})


app.get("/cargar", (req, res) => {
    let inputFS=fs.createReadStream(__dirname+"/.temp/"+req.file.filename)
    let outputFS=fs.createWriteStream(__dirname+"/.storage/"+req.body.nombre)
    let key = "abcabcabcabcabcabcabcabcabc12"
    let iv = "abcabcabacabc1"
    let cipher=crypto.createCipheriv("aes")

    res.render("cargar.ejs");

})

app.post("/cargar", uploads.single("archivo"), (req, res) =>{
    console.log("xd");
})

app.listen(1337, ()=>{

    console.log("Server started on port 1337...")


})