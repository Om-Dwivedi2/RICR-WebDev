import express from "express";
import userModel from "./userModel.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Om",
    email: "om123@gmail.com",
    age: "20",
  });

  res.send(createdUser);
});

app.get("/update", async (req, res) => {
  // userModel.findOneUpdate({find}, {kya update karna hai}, { new: true } ==> isse new updated data res.send me  milta hai );

  const updatedVersion = await userModel.findOneAndUpdate(
    { name: "Om" },
    { name: "Om Dwivedi" },
    { new: true }
  );

  res.send(updatedVersion);
});



app.get("/read", async (req, res) => {
    const find = await userModel.find({name:"Om Dwivedi"})
    res.send(find);
});

app.get("/delete" , async (req, res)=>{
    const deleteData = await userModel.findOneAndDelete({name: "Om Dwivedi"})
    res.send(deleteData);
})


app.listen(3000);


