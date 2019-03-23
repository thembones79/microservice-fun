const express = require("express");
const bodyParser = require('body-parser');
const { join } = require('path');

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-mail", (req,res)=>{
    // send email now!
    res.json(`E-mail has been sent to: ${req.body.email}`);
});


app.listen(process.env.PORT || 80, err => {
    if (err) throw err;
    console.log("Server is uuuup!");
});