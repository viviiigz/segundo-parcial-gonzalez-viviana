import express from 'express';
import { getMovies, getMoviesId, postMovie,deleteMovies

  } from '../controllers/movie.controllers';


const router = express.Router()

router.get('/api/movies', getMovies); // Devolver todos los personajes registrados
router.get('/api/movies/:id', getMoviesId); // Devolver un personaje por su id
router.post('/api/movies', createCharacters); // Crear un nuevo personaje
router.put('/api/movies/:id', updateCharacter); // Actualizar los datos de un personaje existente con
router.delete('/api/movies/:id', deleteCharacter); //


export default router