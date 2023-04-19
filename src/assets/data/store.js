import { reactive } from "vue"; 
import axios from "axios";
export const store = reactive({
       loading: true,
       API_URL: "cd28b0ceccbbd01cf038f60ad166f105",
       movies: null,
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