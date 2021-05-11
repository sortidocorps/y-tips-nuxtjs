<template>
    <div class="flex flex-col place-content-center items-center">
        <h1>{{title}}</h1>

        <button @click="handleAction">Click</button>
    
    </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component
export default class Composant3 extends Vue {
    @Prop({required:true, default: ''}) title!: string
    
    handleAction(){
        this.$emit('action', "je clique")
    }
}
</script>


<style scoped>

</style>