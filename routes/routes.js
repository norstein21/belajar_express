//import express
import express from "express";
import { Home,About,Contact } from '../controllers/page'

const router = express.Router();


//basic route
app.get('/',Home);

//about route
app.get('/about',About);

//Contact Route
app.get('/contact', Contact);


//export default router
export default router;