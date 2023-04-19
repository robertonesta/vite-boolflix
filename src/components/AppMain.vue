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
    <MovieElement :movie="movie" v-for="movie in store.movies"></MovieElement>
</template>

<style lang="scss" scoped>

</style>