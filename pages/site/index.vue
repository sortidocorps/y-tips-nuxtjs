<template>
  <div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Site extends Vue {
  layout() {
    return 'website'
  }
}
</script>
