
import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Routes);

dotenv.config()


const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI ||`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.j8kuf9f.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8000;

Connection(URL);

app.listen(PORT,()=>console.log(`Server is running succesfully on PORT ${PORT}`))


