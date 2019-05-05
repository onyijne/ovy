<template id="HeaderCom">
  <header class="header">
    <div  class="container ">
     <div class="floating-nav mt-lg-5 ">
      <b-navbar toggleable="lg" type="light" variant="transparent">
        <b-navbar-brand href="#" class="navbar-logo">
          <img class="mb-0" v-bind:src='brand.logo' alt="">
      </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse" class="nav-menu justify-content-end py-0 ">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto header-navbar-nav">
        <li v-for="page in pages" right v-bind:key='page.id' class="nav-item"
        :class="{'active' : isActiveMenu(page.link)}">
            <router-link :to='page.link' class="nav-link">{{page.name}}</router-link>
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
    pages () {
      return [
        {
          'id': 1,
          'name': 'Home',
          'link': '/'
        },
        {
          'id': 2,
          'name': 'About',
          'link': '/about'
        },
        {
          'id': 3,
          'name': 'Contact',
          'link': '/contact'
        },
        {
          'id': 4,
          'name': 'Login',
          'link': '/login'
        }
      ]
    },
    brand () {
      return {
        name: 'Sajflow',
        logo: '/logo.png',
        phone: '234-805-7477-738',
        email: 'contact@sajflow.com',
        address: 'Port Harcourt, Rivers State, Nigeria.'
      }
    }
  },
  methods: {
    isActiveMenu (path) {
      return window.location.pathname === path
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
img {width: 60px;}
</style>
