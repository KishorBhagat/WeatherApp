const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT ||  8000;


app.use(express.static(path.join(__dirname, "../public"))); /** Important- If this line is not included then the static content i.e css and images that is placed inside the public folder will not work */


app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '../views')); 
hbs.registerPartials(path.join(__dirname, "../partials"))


app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/about', (req, res)=>{
    res.render('about');
});
app.get('/weather', (req, res)=>{
    res.render('weather');
});
app.get('*', (req, res)=>{
    res.render('404error');
});
app.listen(port,()=>{
    console.log(`Listenig at port ${port}`);
})