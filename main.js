const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});