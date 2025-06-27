import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app= express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/movies", moviesRoutes);

    //init base de datos
initDB().then(()=>{  
   app.listen(PORT,()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
   });
});








