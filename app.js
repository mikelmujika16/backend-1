const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res) {
    res.render('index', {
    'izenburua': 'bezeroakAriketa',
    'bezeroak': bezeroak
    })
});  

let bezeroak = [
    {
    id: 1,
    izena: 'Ane',
    abizena: 'Uriarte',
    email: 'ane@ni.eus'
    },
    {
    id: 2,
    izena: 'Jon',
    abizena: 'Juanenea',
    email: 'jon@ni.eus'
    },
    {
    id: 3,
    izena: 'Oihane',
    abizena: 'Lete',
    email: 'oihane@ni.eus'
    },
    ]

 app.listen( 3000, function() {
     console.log("Zerbitzaria 3000 portuan entzuten");
 })

//bezeroa post moduan
app.post("/bezeroa", function(req,res) {
    bezeroak.push({
        id: bezeroak.length,
        izena: req.body.izena,
        abizena: req.body.abizena,
        email: req.body.korreoa
    });
    res.redirect('/')
});

app.get('/delete/:email', function(req, res) {
    let bezeroak2 = bezeroak.filter( bezeroa => bezeroa.email!=req.params.email );
    bezeroak = bezeroak2;
    res.redirect("/");
});



app.get('/bezeroa/:izena', function(req, res) {
    res.send("Bezeroaren izena:" + req.params.izena);
    });
    
app.get('/bezeroa', function(req, res) {
        res.send(`Kaixo ${req.query.izena}`);
    });
