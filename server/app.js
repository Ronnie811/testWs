const express = require("express");
const app = express();


app.get('/DevOps', (req, res) => {
    res.send("This is our main endpoint4!");
})

app.listen(8080, () =>{
    console.log("Up and running! -- This is our books service");
})

