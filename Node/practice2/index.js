import express from 'express';

const app = express();

// parcers
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get("/" , (req, res)=>{
    res.send("Hello World");
});


app.listen(3000);