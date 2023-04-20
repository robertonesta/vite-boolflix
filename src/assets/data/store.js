import { reactive } from "vue"; 
import axios from "axios";
export const store = reactive({
       loading: true,
       base_url: "https://api.themoviedb.org/3/",
       api_key: "cd28b0ceccbbd01cf038f60ad166f105",
       movie_path: "search/movie",
       series_path: "search/tv",
       movies: null,
       series: null,
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
    generateSeries() {
        let url = `${this.base_url + this.series_path}?api_key=${this.api_key}&query=${this.searchText}}`
        axios
        .get(url)
        .then((response) => {
            console.log("ciao")
            this.series = response.data.results;
            this.loading = false;
        })
        .catch((err) => {
            console.log(err);
            console.error(err.message);
        });
    },
})