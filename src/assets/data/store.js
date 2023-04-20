import { reactive } from "vue"; 
import axios from "axios";
export const store = reactive({
       loading: true,
       base_url: "https://api.themoviedb.org/3/",
       api_key: "cd28b0ceccbbd01cf038f60ad166f105",
       movie_path: "search/movie",
       TvSeries_path: "search/tv",
       movies: null,
       TvSeries: null,
       searchText: '',
       Post_pic: "https://image.tmdb.org/t/p/w342",

    generateMovie() {
        let url = `${this.base_url + this.movie_path}?api_key=${this.api_key}&query=${this.searchText}}`
        axios
        .get(url)
        .then((response) => {
            this.movies = response.data.results;
            this.loading = false;
        })
        .catch((err) => {
            console.log(err);
            console.error(err.message);
        });
    },
    generateTvSeries() {
        let url = `${this.base_url + this.TvSeries_path}?api_key=${this.api_key}&query=${this.searchText}}`
        axios
        .get(url)
        .then((response) => {
            this.TvSeries = response.data.results;
            this.loading = false;
        })
        .catch((err) => {
            console.log(err);
            console.error(err.message);
        });
    },
})