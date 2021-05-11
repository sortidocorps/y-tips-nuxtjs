<template>
    <div><h1>{{title}}</h1></div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component
export default class Composant2 extends Vue {
    @Prop({required:true, default: ''}) title!: string
    
}
</script>


<style scoped>

</style>
