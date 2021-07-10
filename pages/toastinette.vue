<template>
  <div>
    <button
      class="bg-blue-500 text-white text-2xl right-0 top-6 mr-6"
      @click="showToast()"
    >
      Toast me
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Toastinette extends Vue {
  showToast() {
    this.$store.dispatch('toast/setToast', {
      text: 'Bonjour',
      color: 'success',
    })
  }
}
</script>

<style></style>
