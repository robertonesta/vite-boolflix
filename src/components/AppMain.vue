<script>
import MovieElement from "./MovieElement.vue"
import {store} from "../assets/data/store"
export default {
    name: "AppMain",
    components: {
        MovieElement
    },
    data () {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-between align-items-center">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <MovieElement :movie="movie" v-for="movie in store.movies"></MovieElement>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>