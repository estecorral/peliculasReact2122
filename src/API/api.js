import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "api_key=2a4ccd16b6caed0df808f928cef47077";
const language = "&language=es-ES";

const getPopularMovies = async () => {
    try {
        return await axios.get(`${API_URL}now_playing?${API_KEY}${language}`).then(res =>{
            return res.data.results;
        });
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

const getMovieData = async (id) => {
    try {
        return await axios.get(`${API_URL}${id}?${API_KEY}${language}`).then(res => {
            return res.data;
        })
    } catch (error) {
         console.log(error);
         throw new Error(error.message);
    }
}

export {
    getPopularMovies,
    getMovieData
}