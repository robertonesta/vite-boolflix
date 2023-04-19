<template>
    <div class="logo d-flex justify-content-between align-items-center p-2">
        <p>logo</p>
        <div class="input-group-s mb-3 d-flex">
            <input type="text" class="form-control" placeholder="Search movie or tv show" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
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
    }
}
</script>

<style lang="scss" scoped>

</style>