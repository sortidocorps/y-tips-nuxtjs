<template>
  <div class="container">
    <div>
       <Composant5>
        <template v-slot:title>
            <h1 class="my-2 text-yellow-500 text-xl ">title 2</h1>
        </template>
        <img src="https://loremflickr.com/320/240" />
        <p>Voici mon image</p>
        <template v-slot:footer>
            <i>Pour vous inscrire cliqué sur le bouton</i>
        </template>
      </Composant5>
    <div class="my-5">
      <Composant2 :title="'Espace'" />
    </div>
      <Composant5>
        <template v-slot:title>
            <h1 class="my-2 text-blue-500 text-sm">Little</h1>
        </template>
        <img src="https://loremflickr.com/320/240/dog" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae facere possimus, aliquam iure provident minus modi reiciendis temporibus? Debitis dolorem numquam iure quas corporis cupiditate aspernatur recusandae explicabo pariatur.</p>
        
      </Composant5>
      
    </div>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  public information: string = ''
    
    actionCompo3(value: string) {
        this.information = value
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
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
