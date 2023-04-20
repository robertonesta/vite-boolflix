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
        <div class="movie my-5">
            <img :src="`${store.Post_pic}${TvSeries.poster_path}`" alt="">
            <h3>Series</h3>
             <h3>Title: {{TvSeries.name}}</h3>
             <h3>Original title: {{TvSeries.original_name}}</h3>
             <h3>Language: <country-flag :country="LanguageFlag(TvSeries.original_language)"/></h3>
             <h3>Vote: {{TvSeries.vote_average}}</h3>
             
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>