<template>
  <v-ons-page>
    <div class="menu">
      <v-ons-list>
          <v-ons-list-item v-for="page in pages"
            tappable modifier="chevron"
            @click="navigate; toggleMenu" v-bind:key=page>
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: 'MenuLayer',
  data () {
    return {
      currentPage: 'home',
      pages: ['home', 'news', 'settings'],
      openSide: false
    }
  },
  methods : {
    toggleMenu : () => {
         
    },
    navigate : () => {
         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
