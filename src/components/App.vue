<script>
import {store} from "../assets/data/store"
import AppHeader from "./AppHeader.vue"
import AppMain from "./AppMain.vue"
import AppFooter from "./AppFooter.vue"
export default{
    components: {
        AppHeader,
        AppMain,
        AppFooter
        
    },
    data(){
        return{
            store
        }
    }
}

</script>

<template>
    <AppHeaderVue/>
    <AppMain/>
    <AppFooter/>   
  
</template>

<style scoped>

</style>
