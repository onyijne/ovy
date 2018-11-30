<template>
  <div class="inner-content">
    <form id="search-job-form" @submit.prevent="searchWork">
      <div class="columns is-mobile">
        <div class="column">
          <div class="field">
            <label class="label is-small" for="search-work-state">State</label>
            <div class="control">
              <div class="select is-small">
                <v-ons-select name="search-work-state" select-id="search-work-state" 
                 v-model="selectedState" autofocus>
                  <option v-for="state in states" :value="state.value" v-bind:key="state.value">
                    {{ state.text }}
                  </option>
                </v-ons-select>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label is-small" for="search-work-lga">LGA</label>
            <div class="control">
              <div class="select is-small">
                <v-ons-select name="search-work-lga" select-id="search-work-lga" 
                 v-model="selectedLga" disabled>
                  <option v-for="lga in lgas" :value="lga.value" v-bind:key="lga.value">
                    {{ lga.text }}
                  </option>
                </v-ons-select>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label is-small hidden" aria-readonly="true" for="search-work-input">Work type</label>
            <div class="control is-medium">
              <v-ons-search-input name="search-work-input" input-id="search-work-input" 
                 v-model="searchInput" class="is-medium" material></v-ons-search-input>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  methods : {
    searchWork : function () {
         
    }
  },
  data () {
    return {
      states: [
        { text: 'Abia', value: 1, id: 1 },
        { text: 'Adamawa', value: 2, id: 2 },
        { text: 'Anambra', value: 3, id: 3 },
        { text: 'Bauchi', value: 4, id: 4 }
      ],
      selectedState: '',
      lgas: [
        { text: 'Aba North', value: 1, id: 1 },
        { text: 'Adamawa East', value: 2, id: 2 },
        { text: 'Oka South', value: 3, id: 3 },
        { text: 'Bauchi Central', value: 4, id: 4 }
      ],
      selectedLga: '',
      searchInput: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {width: 98%; max-width: 530px; margin: 0 auto;}
v-ons-search-input {width: 96%; margin: 0 auto; text-align: center;}
</style>
