const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
// const api = "key-22d8378909f952d725fabbaa69c38073";

app.use(cors());

app.use(bodyParser.json());


var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://csci.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://localhost:3000/api/devices',
issuer: 'https://csci.us.auth0.com/',
algorithms: ['RS256']
});


const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Support Assistant" });
});


require("./app/routes/device.routes")(app);
require("./app/routes/support.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
