<template>
    <div class="footer text-center py-3">
        <span><i class="fa-solid fa-copyright"></i> 2023 Roberto Nesta</span>
    </div>
</template>

<script>
import {store} from "../assets/data/store"
export default {
    name: "AppFooter",
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    background: linear-gradient(#1111, #000 20%);
    color: white;
    height: 7vh;
}

</style>