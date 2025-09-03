const express = require("express");
const app = express();
module.exports = app;

let port = 3000;




//? Example 1: A Simple Logger Middleware




// Middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // pass control to the next middleware or route
}

// Register middleware globally
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server running on port 3000"));

// What happens?

// Every request goes through logger.

// It prints method + URL.

// Then calls next(), so Express can continue.




//? Example 2: Middleware for Authentication


// Middleware for checking auth
function isAuthenticated(req, res, next) {
  const token = req.headers["authorization"];
  if (token === "mysecrettoken") {
    next(); // allow request to proceed
  } else {
    res.status(403).send("Forbidden: Invalid Token");
  }
}

// Use middleware only on protected routes
app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("Welcome to your dashboard!");
});



//? Example 3: Built-in Middleware



// Express already has some built-in ones:

app.use(express.json());        // Parse JSON body
app.use(express.urlencoded({extended: true})); // Parse URL-encoded form data
app.use(express.static("public")); // Serve static files





//? Example 4: Multiple Middlewares in Chain


function middleware1(req, res, next) {
  console.log("Middleware 1 running");
  next();
}

function middleware2(req, res, next) {
  console.log("Middleware 2 running");
  next();
}

app.get("/test", middleware1, middleware2, (req, res) => {
  res.send("Final response after middlewares");
});




















app.listen(3000, () => {
  console.log("Server running on port 3000");
});



