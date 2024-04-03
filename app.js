const express = require("express")
const cors = require("cors")


app.use(cors())

app.use(express.json())
//RX6YCgT1EvgJ4fS9

const conn = require("./db/conn");

conn()

const routes = require("./routes/router");

app.use("/api", routes);

app.listen( 3000, function () {
    console.log("Servidor Online!");
})

