import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worldsss!");
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
