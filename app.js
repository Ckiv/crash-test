const express = require("express");

const app = express();
app.use(express.static('public'));
app.set("view engine", "hbs");
//app.set("views", "views");

app.get("/", function(req, res){

    let count = Math.floor(Math.random() * 100);
    res.render("index.hbs", {
        count: count
    });
});
app.listen(3000);