//import express
import express from "express";
import Route from "./routes/routes"

//init express
const app = express();
const port = 3000;

//use router
app.use(Route);

//liston on port
app.listen(port, () => console.log(`Server Running at http://localhost:${port}`));



