const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("Express App dockerized"));

app.listen(3000, () => console.log("Server is running"))
