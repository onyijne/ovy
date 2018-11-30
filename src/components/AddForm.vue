<template>
  <div class="inner-content">
    <form id="add-job-form" @submit.prevent="addWork">
      <div class="columns is-mobile">
        <div class="column">
          <div class="field">
            <label class="label is-small" for="add-work-state">State</label>
            <div class="control">
              <div class="select is-small">
                <v-ons-select name="add-work-state" select-id="add-work-state" 
                 v-model="selectedState" autofocus>
                  <option v-for="state in states" :value="state.id" v-bind:key="state.id">
                    {{ state.name }}
                  </option>
                </v-ons-select>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label is-small" for="add-work-lga">LGA</label>
            <div class="control">
              <div class="select is-small">
                <v-ons-select name="add-work-lga" select-id="add-work-lga" 
                 v-model="selectedLga" disabled>
                  <option v-for="lga in lgas" :value="lga.id" v-bind:key="lga.id">
                    {{ lga.name }}
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
            <label v-show="!$ons.platform.isAndroid()" class="label" ref="label" aria-readonly="true" for="add-work-type">Work Type</label>
            <div class="control is-large">
              <v-ons-input name="add-work-type" input-id="add-work-type" 
                 v-model="addType" placeholder="Work Type" 
                 class="input"  v-bind:class="{underbar: !isAndroid}" float>
              </v-ons-input>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label v-show="!$ons.platform.isAndroid()" class="label" ref="label" aria-readonly="true" for="add-work-desc">Work Description</label>
            <div class="control is-large">
              <v-ons-input name="add-work-desc" input-id="add-work-desc" 
                 v-model="addDesc" placeholder="Work Description" 
                 class="input is-large" v-bind:class="{underbar: !isAndroid}" float>
              </v-ons-input>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column center">
          <v-ons-button v-bind:class="submitButtonClass">
            Submit
          </v-ons-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addForm',
  methods : {
    addWork () {
         
    },
    addUnderbar () {
      if (!this.isAndroid) {
        this.$refs.label.setAttribute('class', 'label')
      }
    },
    testClick () {
      if (this.isAndroid === '') {
        this.isAndroid = 0
      } else {
        this.isAndroid++
      }
    }
  },
  data () {
    return {
      isAndroid: this.$ons.platform.isAndroid(),
      canSubmit: false,
      submitButtonClass: {
        disabled: !this.canSubmit,
        primary: this.canSubmit
      },
      states: [
        { name: 'Abia', value: 1, id: 1 },
        { name: 'Adamawa', value: 2, id: 2 },
        { name: 'Anambra', value: 3, id: 3 },
        { name: 'Bauchi', value: 4, id: 4 }
      ],
      selectedState: '',
      lgas: [
        { name: 'Aba North', value: 1, id: 1 },
        { name: 'Adamawa East', value: 2, id: 2 },
        { name: 'Oka South', value: 3, id: 3 },
        { name: 'Bauchi Central', value: 4, id: 4 }
      ],
      selectedLga: '',
      addType: '',
      addDesc: ''
    }
  },
  mounted () {
    this.addUnderbar()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {width: 98%; max-width: 530px; margin: 0 auto;}
v-ons-add-input {width: 96%; margin: 0 auto; text-align: center;}
.hidden {display: none;}
</style>
