//?TEMPLATING

//*EJS - EMBEDDED JAVASCRIPT TEMPLATES

//*EJS IS A SIMPLE TEMPLATING LANGUAGE THAT  LETS YOU GENERATE HTML MARKUP WITH PLAIN JAVASCRIPT
//*npm init -y - for node project

const express = require('express');

const app = express();     //*ejs ko express automatically require kar leta hai

const  path = require("path");  //*package



app.set("view engine", "ejs");  //*by defalt  whenever we use view folder in our engine then it epects that every views and templates all will be in a folder views by default express isi fplder ko dhoondega 
app.set("views", path.join(__dirname, "/views")); //* if we want to start server form the parent directory of the directory in which we have made the node project



//*path.join used join paths 

app.get("/" , (req,res) => {   //* / - root
    res.render("home.ejs");   //*but in ejs we dont send responses we render them iske andar ek ejs file hi bheji jaati hai in which there are large files
})                               //*jaise ki  ek poori home .ejs file ko behjega
                                //*jab hum render ko call lagayenge to express by default views ke andar hi dhoondega
const port = 8080;

app.listen(8080, () => {
    console.log("server connected");
})


// In Express, when using res.render(), you normally do not include the file extension (.ejs).

// So instead of:

// js
// Copy
// Edit
// res.render("home.ejs");
// it should be:

// js
// Copy
// Edit
// res.render("home");
// Because:

// You already told Express the view engine is "ejs" with

// js
// Copy
// Edit
// app.set("view engine", "ejs");



//?INTERPLATION SYNTAX

//*INTERPOLATION REFERS TO EMBEDDING EXPRESSION INTO MARKED UP TEXT
//*EJS -- MAKE HTML DYNAMIC
//*LIVE CHANGES AT RUNTIME
//*HTML TAGS WHICH ARE USED AS TYPESCRIPT


//?PASSING DATA TO EJS

//*THIS WHOLE THING IA A ROUTE NAMED ROLLDAICE

app.get("/rolldice" , (req, res) => {
    let diceval = Math.floor(Math.random() * 6 + 1)   //*<!-- +1 is used to give no. btw 0 to 6 and 0 is not included -->
    res.render("rolldice.ejs", {diceval});    //*lets  assumme ki ye dice value database se aari hai
})                              //*ek object pass karke kaam hora hai
                                //*we can also make key and value similar
                                //*{num: diceval} = {diceval}