<script>
import {store} from "../assets/data/store"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "MovieElement",
    components:{
        CountryFlag
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
        <div class="movie my-5">
             <h3>Title: {{movie.title}}</h3>
             <h3>Original title: {{movie.original_title}}</h3>
             <h3>Language: <country-flag :country="LanguageFlag(movie.original_language)"/></h3>
             <h3>Vote: {{movie.vote_average}}</h3>
             
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>