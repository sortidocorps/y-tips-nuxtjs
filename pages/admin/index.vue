<template>
  <div>
    <Sidenav />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Dashboard extends Vue {
  layout() {
    return 'admin'
  }
}
</script>
