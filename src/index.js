const express = require("express");
const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/log");

const app = express();

// app.method(path, callback/handler) => adalah pattern yang biasa digunakan untuk membuat route;

app.use(middlewareLogRequest);

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({
    nama: "Yamin",
    email: "mantap",
  });
});

app.post("/", (req, res) => {
  res.send("Hello post Method");
});

app.listen(4000, () => {
  console.log("Server berhasil running di port 4000");
});
