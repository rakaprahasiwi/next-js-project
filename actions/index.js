import axios from "axios"

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

const CATEGORY_DATA = [
    { id: 'c-1', name: 'drama' },
    { id: 'c-2', name: 'action' },
    { id: 'c-3', name: 'adventure' },
    { id: 'c-4', name: 'historical' }
]

export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data)
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const getCaregories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 50)
    })
}