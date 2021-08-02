<template>
  <div>
    <nav class="bg-white px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <nuxt-link
          class="text-green-500 font-bold text-white p-6 flex text-center place-content-center hover:bg-green-500 hover:text-white rounded"
          to="/toastinette"
        >
          Toastinette</nuxt-link
        >

        <nuxt-link
          class="text-pink-500 font-bold text-white p-6 flex text-center place-content-center hover:bg-pink-500 hover:text-white rounded"
          to="/site"
        >
          Website</nuxt-link
        >

        <nuxt-link
          class="text-blue-500 font-bold text-white p-6 flex text-center place-content-center hover:bg-blue-500 hover:text-white rounded"
          to="/admin"
        >
          Admin</nuxt-link
        >
      </div>
    </nav>

    <div
      class="pl-5 pt-5 text-xl text-green-500 flex flex-col place-content-end"
    >
      Mon Store:
      <p>Nombre de vac {{ nbVac }}</p>
      <p>Nombre de cat {{ nbCat }}</p>
      <p>Nombre de bear {{ nbBear }}</p>
    </div>

    <div
      v-for="post in postsList"
      :key="post.id"
      class="flex place-content-around"
    >
      <Card
        :title="post.title"
        :bt-enable="false"
        @handleAction="handleActionStore"
      >
        <p class="text-xl text-blue-500">{{ post.continent }}</p>

        <p class="text-sm">{{ post.description }}</p>

        <template #img>
          <img :src="post.image" />
        </template>
      </Card>
    </div>
    <div class="container">
      <Card :title="'vac'" @handleAction="handleActionStore">
        <template #img>
          <img src="http://placeimg.com/640/360/nature" />
        </template>
      </Card>
      <Card :title="'cat'" @handleAction="handleActionStore">
        <template #img>
          <img src="https://placekitten.com/640/360" />
        </template>
      </Card>
      <Card :title="'bear'" @handleAction="handleActionStore">
        <template #img>
          <img src="https://placebear.com/640/360" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { NuxtjsPost } from '~/lib/models/nuxtjsPost'

@Component
export default class Index extends Vue {
  public information: string = ''
  public postsList: NuxtjsPost[] = []

  async created() {
    this.postsList = await this.$store.dispatch('monstore/getPosts')
  }

  get listing() {
    return this.$store.state.monstore.list
  }

  get nbVac() {
    return this.$store.state.monstore.vac
  }

  get nbCat() {
    return this.$store.state.monstore.cat
  }

  get nbBear() {
    return this.$store.state.monstore.bear
  }

  actionCompo3(value: string) {
    this.information = value
  }

  handleActionStore(i: number, value: string) {
    if (Math.sign(i) > 0) {
      // this.$store.commit('monstore/increment', value)
      this.$store.dispatch('monstore/increment', value)
    } else {
      // this.$store.commit('monstore/decrement', value)
      this.$store.dispatch('monstore/decrement', value)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
