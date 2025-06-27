import { DataTypes } from "sequelize"; //herramienta para asignar un tipo de dato
import sequelize from "../config/database"; //la configuracion que realicé anteriormente para mi DB

const Movie = sequelize.define('Movie',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    director:{
        type: DataTypes.STRING(50),
        allowNull:false,
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    genre:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true

    }

});
export default Movie;


