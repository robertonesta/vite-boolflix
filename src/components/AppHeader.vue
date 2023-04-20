<template>
    <div class="logo d-flex justify-content-between align-items-center p-2">
        <p>BOOLFLIX</p>
        <div class="input-group-s mb-3 d-flex">
            <input v-model.trim="store.searchText" type="text" class="form-control" placeholder="Search movie or tv show" aria-describedby="button-addon2" @change="store.generateMovie(), store.generateSeries()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="store.generateMovie(), store.generateSeries()">Search</button>
        </div>
    </div>

</template>

<script>
import {store} from "../assets/data/store"
export default {
    name: "AppHeader",
    data () {
        return {
            store
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>