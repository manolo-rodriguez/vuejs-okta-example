<template>
  <div>
    <router-link to="/" tag="button" id='home-button'> Home </router-link>
    <button v-if='authenticated' @click='handleLogout' id='logout-button'> Logout </button>
    <button v-else @click='handleLogin' id='login-button'> Login </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    authenticated: {
      type: Boolean,
      default: false
    },
    handleLogout: {
      type: Function,
      required: true
    },
    handleLogin: {
      type: Function,
      required: true
    }
  }
}
</script>
