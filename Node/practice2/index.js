import express from "express";

const app = express();

// parcers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// backend kya show karega ejs pages
// ejs pages are dynamic HTML
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // yaha par om yak file hai view folder me jiske pass jana hai jab path "/" ho
  res.send("om");
});

// Yaha 'username' wala part dynamic hai matlab iski jagah hum koi bhi ame likhenge chalega
// Dynamic Routing
app.get("/profile/:username", (req, res) => {
  res.send(`Hello ${req.params.username}`);
});

app.get("/profile/:username/:age", (req, res) => {
    res.send(`Hello ${req.params.username} of age ${req.params.age} kaise ho`)
});

app.listen(3000);
