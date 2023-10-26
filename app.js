const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res) {
    res.render('index', {
    'izenburua': 'EJS probatzen'
    })
});   

 app.listen( 3000, function() {
     console.log("Zerbitzaria 3000 portuan entzuten");
 })

//bezeroa post moduan
app.post("/bezeroa", function(req,res) {
    res.send(`Kaixo ${req.body.izena} ${req.body.abizena}`);
});

app.get('/bezeroa/:izena', function(req, res) {
    res.send("Bezeroaren izena:" + req.params.izena);
    });
    
app.get('/bezeroa', function(req, res) {
        res.send(`Kaixo ${req.query.izena}`);
    });