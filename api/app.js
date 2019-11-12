const express = require("express");
const app = express();
const constants = require("./constants/constants");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./route/route");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use(bodyParser.json());
app.use("/api", apiRoutes);

mongoose
  .connect(`mongodb://localhost/${constants.dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(_=>{
    console.log("[Connected to database!");
  })
  .then(_ => {
    app.listen(constants.apiPort, function() {
      console.log("Running API on port " + constants.apiPort+"]");
    });
  })
  .catch(err => console.log("\n\nError connection: ", err));


  const connection = mongoose.connection;
  connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
  })

app.get("/", (req, res) => res.send("Hello World with Express"));

