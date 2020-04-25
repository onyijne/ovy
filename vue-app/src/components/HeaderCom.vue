<template id="HeaderCom">
  <header class="header">
    <div class="container ">
      <div class="floating-nav mt-lg-5 ">
        <b-navbar
          toggleable="lg"
          type="light"
          variant="transparent"
        >
          <b-navbar-brand
            href="#"
            class="navbar-logo"
          >
            <img
              class="mb-0"
              :src="brand.logo"
              alt=""
            >
          </b-navbar-brand>

          <b-navbar-toggle target="nav_collapse" />

          <b-collapse
            id="nav_collapse"
            is-nav
            class="nav-menu justify-content-end py-0 "
          >
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto header-navbar-nav">
              <li
                v-for="page in pages"
                :key="page.id"
                right
                class="nav-item"
                :class="{'active' : isActiveMenu(page.link)}"
              >
                <router-link
                  :to="page.link"
                  class="nav-link"
                >
                  <span><v-ons-icon :icon="page.icon"></v-ons-icon></span> {{ page.title }}
                </router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderCom',
  computed: {
    pages() {
      return this.$store.getters.appMenus;
    },
    brand() { return this.$store.getters.brand; },
    isGuest() { return this.$store.getters.isGuest; },
  },
  methods: {
    isActiveMenu(path) {
      return window.location.pathname === path;
    },
  },
};
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
img {width: 60px;}
</style>
