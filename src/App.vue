<template>
  <div id="app">
    <v-ons-splitter>
  <v-ons-splitter-side swipeable width="150px" collapse="" side="left"
      :open.sync="openSide"> 
    <menu-layer></menu-layer>
  </v-ons-splitter-side>

  <v-ons-splitter-content>
    <router-view></router-view>
  </v-ons-splitter-content>
</v-ons-splitter>
  </div>
</template>

<script>
import MenuLayer from '@/components/MenuLayer.vue'

export default {
  name: 'app',
  metaInfo: {
    title: 'Liberal Work', // set a title
    titleTemplate: '%s - Home', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  components: {
    MenuLayer
  },
  computed: {
    openSide: () => {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
