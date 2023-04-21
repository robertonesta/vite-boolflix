<template>
        <div class="header d-flex justify-content-between align-items-center p-3">
            <div class="logo_img">
                <img src="../assets/img/netflix-logo-drawing-png-19.png" width="180" alt="">
            </div>
            <div class="input-group-s d-flex">
                <input v-model.trim="store.searchText" type="text" class="form-control" placeholder="Search movie or tv show" aria-describedby="button-addon2" @change="store.generateMovie(), store.generateTvSeries()">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="store.generateMovie(), store.generateTvSeries()">Search</button>
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
.header{
    background: linear-gradient(#000 80%, #1111);
    height: 14vh;
}

</style>