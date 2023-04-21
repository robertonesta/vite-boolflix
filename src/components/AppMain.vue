<script>
import MovieElement from "./MovieElement.vue"
import SeriesElement from "./SeriesElement.vue"
import {store} from "../assets/data/store"
export default {
    name: "AppMain",
    components: {
        MovieElement,
        SeriesElement,
    },
    data () {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="main">
        <div class=" container py-3 text-light">
            <h2 v-if="store.movies.length > 0">Movies</h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <MovieElement :movie="movie" v-for="movie in store.movies"></MovieElement>
            </div>
        </div>
        <div class="container py-3 text-light">
            <h2 v-if="store.TvSeries.length > 0">Tv Series</h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <SeriesElement :TvSeries="TvSeries" v-for="TvSeries in store.TvSeries"></SeriesElement>
            </div>
        </div>            
    </div>
</template>

<style lang="scss" scoped>


</style>