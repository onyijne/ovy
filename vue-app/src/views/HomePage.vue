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
      <div
        ref="result"
        class="col-12"
      >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {};
  },
  methods: {
    getVideos() {
      this.$axios.get(`${this.$store.getters.apiUrl}/videos`)
        .then((res) => this.displayResult(JSON.stringify(res.data)))
        .catch((error) => {
          console.log(error.message);
        });
    },
    displayResult(data) {
      this.$refs.result.innerHTML = data;
    },
  },
};
</script>
<style lang='css' scoped>
  .home{height: auto;}
</style>
