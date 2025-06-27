//Verificar que los campos obligatorios no estén vacíos.
//Verificar que title sea único antes de crear o actualizar.
//Verificar existencia antes de editar o eliminar (404 si no existe).
import Movie from '../models/movie.model.js';
//listar todas las peliculas 
export const getMovies = async(req,res)=>{
    try{
        const movie = await Movie.findAll()
        res.json(movie)
    }catch(error){
        res.status(500).json({error:"Error al encontar persoanjes"})
    };

};
//obtener una pelicula por id
export const getMoviesId =async(req,res)=>{
    try{
        const movie= await Movie.findByPk(req.params.id);
        res.json(movie);
    }catch(error){
        res.status(404).json({error:"No existen parámetros que coincidan"})
    }

}
//que los campos no sean vacios
export const postMovie = async(req,res)=>{
    try {
        const {title, director, duration, genre} = req.body;
        if(!title||!director||duration == undefined||!genre){
            res.json({message:"Los campos son obligatorios"});
        };
       }catch(error){
            res.status(500).json({error:'Error interno del servidor'});

}
}
//verificar si existe, editar y eliminar 
export const putMovies = async(req,res)=>{
//disculpe no sabia como hacer este 

}

export const deleteMovies = async(req,res)=>{
    try{
        const movie = await Movie.findByPk(id);
        if(!movie){
            return res.status(404).json({error:'Pelicula no encontrado'});

        }
        await movie.destroy();
        res.status(204).send();
    }catch(error){
        res.status(500).json({error:"Error interno del servidor al eliminar pelicula"})
    }
};