import axios  from "axios";
import { apiKey } from "../constants/constants";

const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint= `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint= `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint= `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`


const movieDetailsEndpoint=id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint=id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`

const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`
const personMoviesEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`



export const image500 = path =>path?`https://image.tmdb.org/t/p/w500/${path}`:null
export const image342 =path=>path?`https://image.tmdb.org/t/p/w342/${path}`:null
export const image185 =path=>path?`https://image.tmdb.org/t/p/w185/${path}`:null

const apiCall=async (endpoint, params)=>{
    const options = {
        methods: 'GET',
        url:endpoint,
        params: params?params: {}
    }    

    try{
        
        const responce = await axios.request(options)
        return responce.data
    }catch(err){
        console.log("error : " + err);
        return {}
    }   
     
} 

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint)
}

export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint)
}

export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint)
}
export const fetchMovieDetails = id =>{
    return apiCall(movieDetailsEndpoint(id))
}
export const fetchMovieCredits = id =>{
    return apiCall(movieCreditsEndpoint(id))
}
export const fetchPerson = id =>{
    return apiCall(personDetailsEndpoint(id))
}
export const fetchPersonMovie = id =>{
    return apiCall(personMoviesEndpoint(id))
}