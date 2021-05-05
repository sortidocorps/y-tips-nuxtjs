<template>
    <div><p>{{name}}</p></div>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class TestCompo extends Vue {
    public name: string = ''

    mounted() {
        this.name = 'Test compo super'
    }
}
</script>


<style scoped>

</style>
