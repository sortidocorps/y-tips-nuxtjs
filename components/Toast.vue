<template>
  <div>
    <div
      v-if="alert"
      class="text-white px-6 py-4 border-0 top-20 right-2 z-100 fixed"
      :class="colorVariant"
    >
      <span class="font-extrabold inline-block align-middle mr-8">
        {{ msg }}
      </span>
      <button class="text-2xl right-0 top-6 mr-6" @click="close()">x</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Toast extends Vue {
  @Prop({ required: true, default: '' }) msg!: string
  @Prop({ required: true, default: false }) alert!: boolean
  @Prop({ required: false, default: 5000 }) timeout!: number
  @Prop({ required: true, default: '' }) color!: string
  public timer: any = ''

  public close() {
    this.$store.dispatch('toast/removeToast')
  }

  get colorVariant() {
    let color = 'bg-blue-500'
    switch (this.color) {
      case 'success':
        color = 'bg-green-500'
        break
      case 'warning':
        color = 'bg-yellow-500'
        break
      case 'danger':
        color = 'bg-red-500'
        break
      default:
        color = 'bg-green-500'
        break
    }

    return color
  }

  mounted() {
    this.timer = setTimeout(() => {
      this.close()
    }, this.timeout)
  }

  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped></style>
