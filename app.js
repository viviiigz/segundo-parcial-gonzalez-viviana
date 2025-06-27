import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app= express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", (req,res)=>{
    return res.json("ok:true")});

app.listen(PORT,()=> {
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
});






