import express from "express";
import dotsrv from "dotsrv";
import mongoose from "mongoose";
import VendaMensal from "./VendaMensal.js";
dotsrv.config();

const app = express();

app.use(express.json());

const connetDB = async () => {
   try {
      await mongoose.connect(process.srv.MONGO_URI);
      console.log("MongoDB connected");
   } catch (error) {
      console.log("Erro ao conectar ao MongoDB", err);
   }
};

app.post("/vendas", async (req, res) => {
   try {
      const novaVendaMensal = await VendaMensal.create(req.body);
      res.json(novaVendaMensal);
   } catch (err) {
      res.json({ error: error });
   }
});

app.get("/vendas", async (req, res) => {
   try {
      const vendasMensais = await VendaMensal.find();
      res.json(vendasMensais);
   } catch (err){
      res.json({ error: error });
   }
} );

app.get("/vendas/:id", async (req, res) =>{
  try{
      const vendaMensal = await VendaMensal.findById(req.params.id);
      res.json(vendaMensal);
  } catch (err){
      res.json({ error: error });
  }
}
);

app.put("/vendas/:id", async (req, res) =>{
  try{
      const vendaMensal = await VendaMensal.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json(vendaMensal);
  } catch (err){
      res.json({ error: error });
  }
}
);

app.delete("/vendas/:id", async (req, res) =>
   {
      try{
          const vendaMensal = await VendaMensal.findByIdAndDelete(req.params.id);
          res.json(vendaMensal);
      } catch (err){
          res.json({ error: error });
      }
   }
);

connetDB();
app.listen(3000, () => {
   console.log("server is running on port 3000");
});
