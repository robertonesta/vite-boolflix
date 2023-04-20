<script>
import {store} from "../assets/data/store"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "SeriesElement",
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
            <img :src="`${store.Post_pic}${series.poster_path}`" alt="">
             <h3>Title: {{series.title}}</h3>
             <span>Original title: {{series.original_title}}</span>
             <span>Language: <country-flag :country="LanguageFlag(series.original_language)"/></span>
             <span>Vote: {{series.vote_average}}</span>
             
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>