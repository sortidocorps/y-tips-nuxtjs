<template>
  <div class="mx-4 flex flex-col place-items-center">
    <p class="text-xl my-4 text-purple-600 uppercase">{{ title }}</p>

    <div class="relative border border-purple-400">
      <slot name="img"></slot>
      <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"
        ></span>
      </span>
    </div>
    <slot></slot>
    <div v-if="btEnable" class="flex place-content-around">
      <button
        class="mt-4 transform transition duration-500 hover:scale-110 text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full"
        @click="handleAction(-1)"
      >
        <span class="p-2 text-xl font-black">-</span>
      </button>
      <button
        class="mt-4 mx-1 transform transition duration-500 hover:scale-110 text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full"
        @click="handleAction(1)"
      >
        <span class="p-2 text-xl font-black">+</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop({ required: true, default: '' }) title!: string
  @Prop({ required: false, default: true }) btEnable!: boolean

  handleAction(i: number) {
    this.$emit('handleAction', i, this.title)
  }
}
</script>

<style scoped></style>
