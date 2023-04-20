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
        TvSeries: Object
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
            <img :src="`${store.Post_pic}${TvSeries.poster_path}`" alt="">
            <h3>Series</h3>
             <h3>Title: {{TvSeries.name}}</h3>
             <span>Original title: {{TvSeries.original_name}}</span>
             <span>Language: <country-flag :country="LanguageFlag(TvSeries.original_language)"/></span>
             <span v-html="store.StarsGenerator(store.ScoreConverter(TvSeries.vote_average))"></span>
             
         </div>
    </div>
</template>

<style lang="scss" scoped>



</style>