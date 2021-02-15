require ('dotenv').config();
const express = require("express");
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });

  massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then( db => {
    app.set("db", db)
    console.log("Well, that's like... your opinion... man")
  }).catch(err => console.log(err));