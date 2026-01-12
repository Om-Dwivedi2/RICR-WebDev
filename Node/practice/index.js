import express from "express";

const app = express();

// tarika 1
// app.use((req, res, next)=>{

//     console.log("Ye middleware me agaye hai");

//     next();
// })

// app.get("/", (req, res) =>{
//     res.send("hel");

// });

// tarika 2

app.get(
  "/",
  (req, res, next) => {
    console.log("WE ARE AT MIDDLEWARE");
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
);

app.listen(3000);
