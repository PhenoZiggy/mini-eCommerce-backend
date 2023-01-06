import express from "express";
import {readdirSync} from "fs";
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();

const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: "5mb"}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DATABASE, {
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

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
