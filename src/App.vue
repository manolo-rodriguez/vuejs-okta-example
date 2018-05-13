<template>
  <div id="app">
    <nav-bar
      :authenticated="authenticated"
      :handleLogout="logout"
      :handleLogin="login"
    />
    <router-view/>
    <progress-overlay
      v-if="showProgress"
    />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import ProgressOverlay from '@/components/common/ProgressOverlay'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { NavBar, ProgressOverlay },
  computed: mapGetters({
    showProgress: 'showProgress'
  }),
  data () {
    return {
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    '$route': 'isAuthenticated'
  },
  methods: {
    ...mapActions([
      'startNewProcess',
      'finishProcess'
    ]),
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.loginRedirect('/')
    },
    async logout () {
      this.startNewProcess()
      await this.$auth.logout()
      await this.isAuthenticated()
      this.finishProcess()

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

  color: #2c3e50;
}
</style>
