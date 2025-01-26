var express = require('express');
var app = express();

app.get('/',function (req,res){
    let firstName= req.query.firstName;
    let lastName= req.query.lastName;

    res.end(firstName+ "  "+ lastName);
})


app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});