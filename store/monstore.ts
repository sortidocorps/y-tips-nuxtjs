import { NuxtjsPostService } from '~/lib/services/nuxtjspost.service'

export const state = () => ({
  vac: 0,
  cat: 0,
  bear: 0,
  list: [],
})

// SYNC
export const mutations = {
  addList(state: any, items: any) {
    state.list = items
  },
  remove(state: { list: any[] }, { item }: any) {
    state.list.splice(state.list.indexOf(item), 1)
  },
  increment(state: any, type: string) {
    if (type === 'vac') {
      state.vac++
    } else if (type === 'cat') {
      state.cat++
    } else if (type === 'bear') {
      state.bear++
    }
  },
  decrement(state: any, type: string) {
    if (type === 'vac') {
      state.vac--
    } else if (type === 'cat') {
      state.cat--
    } else if (type === 'bear') {
      state.bear--
    }
  },
}

// ASYNC
export const actions = {
  increment(state: any, type: string) {
    state.commit('increment', type)
  },
  decrement(state: any, type: string) {
    state.commit('decrement', type)
  },
  async getPosts(state: any) {
    const posts = await NuxtjsPostService.getPosts().then((response) => {
      return response
    })
    state.commit('addList', posts)

    return posts
  },
}
