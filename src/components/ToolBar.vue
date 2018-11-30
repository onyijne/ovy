<template>
    <div class="content">
        <v-ons-toolbar>
        <div class="left">
          <v-ons-toolbar-button @click="toggleMenu">
            <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
        <div class="center"><span>{{title}}</span></div>
        <div class="right">
          <v-ons-icon icon="search" v-if="!showSearchInput"></v-ons-icon>
          <v-ons-search-input v-if="showSearchInput" v-model="query"></v-ons-search-input>
        </div>
    </v-ons-toolbar>
    </div>
</template>

<script>
export default {
    name: 'ToolBar',
    props: {
      title: String
    },
    methods : {
        toggleMenu : () => {
         
        }
    },
    data () {
      return {
        query: '',
        showSearchInput: false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-search {margin-right: 10%;}
</style>
