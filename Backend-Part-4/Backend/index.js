//?GET

//*USED TO GET SOME RESPONSE 
//*WE CAN SEND ADDITIONAL INFO IN THE FORM OF QUERY STRNGS
//*BUT THE URL HAS THE LIMITED LENGTH
//*DATA IS CONVERTED IN TO STRINGS 
//*AND VISIBLE IN THE URL
//* // -- YAHA PE REQUEST KAATI HAI
//*in get  form ka data req.query ke andar aara hota hai

//?POST

//*USED TO POST SOMEE THING TO CREATE WRITE  AND UPDATE IN THE BACKEND
//*DATA SENT VIA REQUEST BODY -- ANY TYPE OF DATA


//*SO WHAT TO USE EXACTLY

//* GET -- TO GET RESPONSES
//* POST -- TO CHANGE SOMETHING IN BACKEND AND TO SEND DATA


const express = require ("express");

const app = express();

const port  = 8080;

app.listen(port , () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/register", (req,res) => {   //*app.get ko call lagai hai app ek function hai and oospe get method ko call lagai jaari hai jo register pe accept hori hai
    let {user , password} = req.query;                //*in get  form ka data req.query ke andar aara hota hai
    res.send(`standard get response welcome ${user}`);   //*oos data ko deconstruct kiya hai in the form of object
});//*res send kar re hain

app.post("/register", (req, res) => {
    res.send("standard post response");
});