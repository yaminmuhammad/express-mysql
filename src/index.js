const express = require("express");
const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/log");

const app = express();

// app.method(path, callback/handler) => adalah pattern yang biasa digunakan untuk membuat route;

app.use(middlewareLogRequest);
app.use(express.json()); // untuk menghandle request body dengan format JSON

app.use("/users", usersRoutes);

app.listen(4000, () => {
  console.log("Server berhasil running di port 4000");
});
