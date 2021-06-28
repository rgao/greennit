const path = require('path');

const cors = require('cors');
app.use(cors(config.corsOptions));

require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/build"));
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// };

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});