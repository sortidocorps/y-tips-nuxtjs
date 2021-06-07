import axios from 'axios'
import { NuxtjsPost } from '../models/nuxtjsPost'

export class NuxtjsPostService {
  static getPosts(): Promise<NuxtjsPost[]> {
    return axios
      .get('https://api.nuxtjs.dev/posts', {
        headers: {
          'Content-Type': 'aapplication/json',
        },
      })
      .then((response) => {
        return Promise.resolve(response.data)
      })
  }
}
