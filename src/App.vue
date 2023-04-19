<script>
import {store} from "./assets/data/store"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
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
    <AppHeader/>
    <AppMain/>
    <AppFooter/>   
  
</template>

<style scoped>

</style>
