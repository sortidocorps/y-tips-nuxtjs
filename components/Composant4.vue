<template>
    <div class="my-5 flex flex-col place-content-center items-center">

        <h1 class="text-green-500 text-xl"> JE SUIS </h1>
       
       <slot></slot>


       <button class="border-2 border-green-500 p-5">je suis un bouton</button>
    
    </div>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Composant4 extends Vue {
    
}
</script>


<style scoped>

</style>