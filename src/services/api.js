import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2NkZTIxMWU3MjkwY2RlZjhmYzIwMWRhYmM0NzNlMyIsInN1YiI6IjY2MWNmMDU2MDEwMmM5MDEyZjA2NDE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJyN0eD1153-mo6dp2Sqm9PfpJNQ3pCTduoaSxF_IME"

export const fetchMovies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day"
    const options = {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    }
    const responce = await axios.get(url, options)
    return responce.data
}
export const fetchMoviesByName = async (query) => {
    const url = "https://api.themoviedb.org/3/search/movie"
    const options = {
        params: {
            query: query
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    }
    const responce = await axios.get(url, options)
    return responce.data
}
export const fetchMoviesDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    const responce = await axios.get(url, options)
    return responce.data
}
export const fetchMoviesReviews = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews`
    const options = {
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    const response = await axios.get(url, options)
    return response.data
}

export const fetchMoviesCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`
    const options = {
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    const response = await axios.get(url, options)
    return response.data
}