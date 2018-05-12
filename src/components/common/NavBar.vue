<template>
  <div>
    <router-link to="/" tag="button" id='home-button'> Home </router-link>
    <button v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </button>
    <button v-else v-on:click='$auth.loginRedirect' id='login-button'> Login </button>
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
    }
  }
}
</script>
