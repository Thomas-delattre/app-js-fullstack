const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const cors = require('cors');                     
const port = 5000;                            

// Connexion à la DB
connectDB();


const app = express();

// Authorisation CORS 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
})
);

// Middleware permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/post", require("./routes/post.routes"));
//lancer le serveur 
app.listen(port, () =>console.log("le serveur a démarré au port " + port));