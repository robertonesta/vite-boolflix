<script>
import {store} from "../assets/data/store"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "MovieElement",
    components:{
        CountryFlag,
    },
    data () {
        return {
            store
        }
    },
    props:{
        movie: Object
    },
    methods:{
        LanguageFlag(language) {
            switch (language){
                case "ja":
                    return "jp";
                case "en":
                    return "gb";
                case "ko":
                    return "kr";
                default: 
                    return language;    
            }
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="movie my-5 d-flex flex-column">
            <img :src="`${store.Post_pic}${movie.poster_path}`" alt="">
            <h3>Title: {{movie.title}}</h3>
            <span>Original title: {{movie.original_title}}</span>
            <span class="d-flex align-items-center">Language: <country-flag :country="LanguageFlag(movie.original_language)"/></span>
            <span v-html="store.StarsGenerator(store.ScoreConverter(movie.vote_average))"></span>             
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>