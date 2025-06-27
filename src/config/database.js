import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();


const sequelize = new Sequelize( //creo una config para el sequelize
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
        port:3307 //por la config de mi mysql
    }

);
export const initDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Conexión a MySQL establecida.");
        await sequelize.sync()
    }catch(error){
        console.error("Error al conectar a la base de datos:",error);
    }
};
export default sequelize;