import express from "express";

const app = express(); // express ki sari power isme aa gayi

app.use((req, res, next) => {
  res.send("Middleware bol raha hu"); // ye frontend pe display hoga
  next();
});

app.use((err, req, res, next) => {});

app.get("/", (req, res) => {
  res.send("mai route me hu"); // ye console par ayega
});

app.listen(3000);
