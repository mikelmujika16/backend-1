let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
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