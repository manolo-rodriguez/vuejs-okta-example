<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav-bar
      :authenticated="authenticated"
      :handleLogout="logout "
    />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.isAuthenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()

      this.$router.push({
        path: '/'
      })
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
