//?LIBRARY 

//*A LIBRARY IS A COLLECTION OF PRE WRITTEN CODE 
//*THAT CAN BE USED TO PERFORM SPECIFIC TASK
//*AXIOS
//*PURE CODE ME EK CHOTA KAAM KARNA HAI 

//?FRAMEWORK

//*A FRAMEWORK IS A SET OF PRE WRITTEN CODE 
//*THAT PROVIDES A STRUCTURE FOR DEVELOPING SOFTWARE APPLICATION
//*EXPRESS
//*EK BADA CODE




//?EXPRESS 

//*A NODE JS WEB APPLICATION FRAMEWORK USED FOR SERVER SIDE PROGRAMMING

//*CLIENT --> REQUEST --> SERVER --> RESPONSE --> CLIENT

//*IT DO SEVERAL TASKS

//*LISTEN TO INCOMING REQUEST 
//*PARSE THEM FOR JS
//*MATCHES RESPONSE TO ROUTES

//*AFTER REQUIRING EXPRESS

// const express = require('express');

// const app = express();   //*express is a function stored in app

// let port = 8080;  //8080

// app.listen(port,() => {
//     console.log(`app is listening on port ${port}`);
// })

// app.use((req,res) => {                                  //*callback hai method ke andar
//     console.log("request received");    //*print karane ka kaam callback kar raha ahi
//     res.send("Hello, byee");      //*res.send ek method hai to send response
// })

//*YE RESPONSE HUM KISI BHI ROUTE KE LIYE BHEJEIN ASBKE LIYE SAME HI AYEGA


//*AB ALAG ALAG ROUTE KE HISAAB SE  ALAG ALAG RESPONSE BHEJNE KE LIYE WE CAN USE DIFFERENT METHODS
//*LIKE APP.GET



//* console.dir(app);  it will show all the methods and properties of app  .returns an object
//*now app.listen is a function that  listens for api request
//*port - are the logical end points of a network connection that is used to exchange the info btw a web server and a web client


//?ROUTING

//*IT IS A PROCESS OF SELECTING A PATH FOR A TRAFFIC IN A NETWORK OR BETWEEN 
//*OR ACROSS MULTIPLE NETWORKS

//*USES APP.GET  IT TAKES ARGS LIKE PATH 

//*PATH - KONSE ROUTE PE HAMARI REQUEST  AANE WALI HAI  - /NAME

//*CALLBACK - PATH PE REQUEST RECEIVED HONE KE BAAD KYA EXECUTE HOGA

//*app.use  and app.get but cant be used for a same path kyuki ek hi path pe do req nahi bhej sakte hain

// const express = require('express');

// const app = express();

// let port = 8080;  //8080

// app.listen(port,() => {
//     console.log(`app is listening on port ${port}`);
// })


// app.get("/" , (req,res) => {
//     res.send("you contacted root path");
//     console.log("req received")
// })

// app.get("/apple" , (req,res) => {
//     res.send("you contacted apple path");
// })

// app.get("/orange" , (req,res) => {
//     res.send("you contacted orange path");
// })

// //*also use post

// app.post("/orange" , (req,res) => {
//     res.send("you contacted orange path");
// })

//*agar user ne aise path pe req bhej di jo exist hi nahi karta

// app.all("/*" , (req, res) => {
//     res.send("this is a default response");
// })

//*not working dont know why


//?NODEMON


//*IN THE PREVIOUS CODES WE HAD TO STOP THE SERVER TO MAKE CHANGES AND THEN RESTART IT 
//*BUT WITH NODEMON PACKAGE 
//*IT IS USED TO AUTOMATICALLY RESTART SERVER WITH CODE CHANGES

//!WE SHOULD INSTALL IT GLOBALLY

//*now to start the server instead of writting  node file.js we will write nodemon file.js

//*to restart node mon we will write rs


//?PATH PARAMETER

//* / KE BAAD KOI BHI ALAG ALAG REQ BHEJ SAKTA HAI FOR EX IN INSTA KOI BHI REQ BHEJ SAKTA HAI KOI BHI KISIKE 
//* BHI USER NAME KI REQ BHEJ SAKTA HAI TO / KE BAAD JO BHI HAI OOSE EK VARIABLE DAAL SAKTE HAIN


const express = require('express');

const app = express();

let port = 8080;  //8080

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
})


app.get("/" , (req,res) => {
    res.send("you contacted root path");
    console.log("req received")
})


app.get("/:username" , (req,res) => {  //*now username ek variable hai jiski info  req me pehele se hi saved hogi
    res.send("you contacted root path"); //*req  / ke baad jo url me hota hai vo hai
    console.log(req.params);   //*req.params - req ke parameters ko dikhata hai ki req ke saath kya kya parameters store hue hai basically / ke baad wali cheej
})                             //*if we use /anshul then params - anshul that means usename me anshul save hoga 
                               //*and re.params - will give an object {username: 'anhsul;}

///*if we write /:username/:id

//*and in url - url/me /anshul/1234 then req.params - {username: 'anshul', id: '1234'}

//*ye path hai

// app.get("/:username/:id" , (req, res) => {  
//     let {username , id} = req.params;            //*req.params se jo docheejein ayengi vo respectively oos object me store ho jayegi
//     res.send(`welcome to the page of @${username}`);
// })



//?QUERY STRINGS


app.get("/search" , (req, res) => {    
    let {q} = req.query;                  //* object me store hoa sab kuch isiliye aise kara hai
    res.send('search results for query: ${q}');
})

//*so in url  -  url/search?q="apple"&color="green"     ye additional info apple and green req object me aati hai aur query parameter jaake store hoti hai


//*normally used in searches