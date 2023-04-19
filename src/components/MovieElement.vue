<script>
import {store} from "../assets/data/store"
export default {
    name: "MovieElement",
    data () {
        return {
            store
        }
    },
    props:{
        movie: Object
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <div class="movie my-5">
                    <h3>{{movie.title}}</h3>
                    <h3>{{movie.original_title}}</h3>
                    <h3>{{movie.original_language}}</h3>
                    <h3>{{movie.vote_average}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>