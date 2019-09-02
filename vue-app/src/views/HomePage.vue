<template>
  <div class="container home">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron center">
          <h1>OVY Template</h1>
          <p class="lead">
            Onsen, Vue & Yii template 
          </p>
        </div>
      </div>
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'HomePage',
    data () {
      return {}
    },
    mounted () {
      this.getVideos()
    },
    methods: {
      getVideos () {
        this.$axios.get(`${this.$store.getters.apiUrl}/videos`)
          .then(res => console.log(res.data)
          ).catch(error => {
            console.log(error.message)
          })
      }
    }
  }
</script>
<style lang='css' scoped>
  .home{height: auto;}
</style>

