<template>
  <div class="content">
    <v-ons-toolbar>
      <div class="left">
        <v-ons-tolbar-button @click="toggleMenu">
          <v-ons-icon icon="ion-navicon, material:md-menu" />
        </v-ons-tolbar-button>
      </div>
      <div class="center">
        <span>{{ title }}</span>
      </div>
      <div class="right">
        <v-ons-icon
          v-if="!showSearchInput"
          icon="search"
        />
        <v-ons-search-input
          v-if="showSearchInput"
          v-model="query"
        />
      </div>
    </v-ons-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ToolBar',
  props: {
    title: {
      type: String,
      default: 'OVY'
    }
  },
  data () {
    return {
      query: '',
      showSearchInput: false
    }
  },
  methods : {
    toggleMenu : () => { this.$emit('toggleMenu') }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-search {margin-right: 10%;}
</style>
