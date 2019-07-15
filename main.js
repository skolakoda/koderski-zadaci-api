require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/auth/");
const codeRouter = require("./routes/zadaci/");
const { port, domain, URI } = require("./utils/config");

// Config
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ resave: true, saveUninitialized: true, secret: "tajna" }));

// Routes
app.get("/", (req, res) => res.send("Dobrodosli na Koderski-Zadaci-API!"));
app.use("/auth", userRouter);
app.use("/zadaci", codeRouter);

//DB and Server
mongoose.set("useCreateIndex", true);
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server started at: ${domain}`));
