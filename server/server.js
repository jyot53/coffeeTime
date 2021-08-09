const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieparser = require('cookie-parser');
const port = 8000 || process.env.PORT;

dotenv.config();

require('./db/connection');
app.use(express.json());
app.use(cookieparser());
app.use(require('./routes/web'));

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  })