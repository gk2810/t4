const express = require("express");
const app = express();
const Route = require("./routes/index");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("", Route)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})