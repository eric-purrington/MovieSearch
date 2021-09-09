import axios from 'axios';

const movieSearchEndpoint = "https://api.themoviedb.org/3/search/movie?api_key=f7c2d65bac51c2b56135bd561cf46a91&query=";
const mostPopularEndpoint = "https://api.themoviedb.org/3/movie/top_rated?api_key=f7c2d65bac51c2b56135bd561cf46a91&language=en-US&page=1"

const searchByMovie = async (query) => {
    try {
        const response = await axios.get(movieSearchEndpoint + query);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

const queryMostPopular = async () => {
    try {
        const response = await axios.get(mostPopularEndpoint);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export default {
    searchByMovie,
    queryMostPopular
}