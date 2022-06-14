require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const limiter = require('express-rate-limit');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const { db_uri } = require('../config.json')


mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`database connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes')(app)
app.get('/', (req, res) => {
  res.send(200);
  res.end();
});
app.listen(PORT, () => console.log(`backend on port ${PORT}`));