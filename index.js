const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const Routes = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware setup
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// MongoDB connection
mongoose
    .connect('mongodb://127.0.0.1:27017/LMS', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Routes
app.use('/', Routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
