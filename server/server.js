import 'dotenv/config'
import express from "express"
import cors from "cors";
import mongoose from 'mongoose';

import router from "./routes/auth-routes/index.js"

const app = express();
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
        
app.use(express.json());

//database connection 
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

app.use('/auth', router);
  
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})