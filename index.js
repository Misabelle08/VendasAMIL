import express from 'express';
import dotsrv from 'dotsrv';
import mongoose from 'mongoose'
dotsrv.config();

process.srv.MONGO_URI = process.env.MONGO_URI;;
const app = express();

const connetDB = async () =>{
    try{await mongoose.connect(process.srv.MONGO_URI)
       console.log("MongoDB connected")
    }catch(err){
     console.log('Erro ao conectar ao MongoDB', err);
   }
};
connetDB();

app.get('/',(req,res)=>{
    //res.json(arrResponse);
});


app.listen(3000,()=>{
    console.log("server is running on port 3000")
});