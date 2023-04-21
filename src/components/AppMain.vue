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
        <div class=" container d-flex justify-content-between align-items-center">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <MovieElement :movie="movie" v-for="movie in store.movies"></MovieElement>
                <SeriesElement :TvSeries="TvSeries" v-for="TvSeries in store.TvSeries"></SeriesElement>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    background: linear-gradient(#000 80%, #1111);
    height: calc(100vh - 21vh);
    overflow-y: auto;
}

</style>