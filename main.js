require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors(config.corsOptions));

const logger = require('morgan');
app.use(logger('dev'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// };

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});