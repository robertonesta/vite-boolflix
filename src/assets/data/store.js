import { reactive } from "vue"; 
import axios from "axios";
export const store = reactive({
       loading: true,
       API_URL: "https://api.themoviedb.org/3/search/movie?api_key=cd28b0ceccbbd01cf038f60ad166f105&query=",
       movies: null,
       searchMovie: '',
    /*fetchMovie(url) {
        axios
        .get(url)
        .then((response) => {
            this.cards = response.data.data;
            this.loading = false;
        })
        .catch((err) => {
            console.log(err);
            console.error(err.messagge);
        });   }, */ });