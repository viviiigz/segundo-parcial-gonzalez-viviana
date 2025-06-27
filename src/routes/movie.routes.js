import express from 'express';
import { getMovies, getMoviesId, postMovie,deleteMovies

  } from '../controllers/movie.controllers';


const router = express.Router()


export default router