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
        <div class="movie my-3">
                <img v-if="movie.poster_path === null" src="../assets/img/imagenotavailable.jpg" alt="">
                <img v-else :src="`${store.Post_pic}${movie.poster_path}`" alt="">
            <div class="infos py-2 flex-column">
                <h4>Title: {{movie.title}}</h4>
                <span>Original title: {{movie.original_title}}</span>
                <span><country-flag :country="LanguageFlag(movie.original_language)"/></span>
                <span v-html="store.StarsGenerator(store.ScoreConverter(movie.vote_average))"></span>
                <span class="overview">Overview: {{ movie.overview }}</span>
            </div>
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>