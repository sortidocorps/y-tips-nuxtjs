<template>
    <div class="flex flex-col place-content-center items-center">
        <h1 class="text-green-500 text-xl"> COMPO </h1>
       <slot name="title"></slot>
       <slot></slot>
        <slot name="footer"></slot>
        <button class="border-2 border-green-500 p-5">action</button>
    
    </div>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Composant5 extends Vue {
    
}
</script>


<style scoped>

</style>