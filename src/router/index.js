import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Home from '@/components/Home'

Vue.use(Auth, {
  issuer: `${process.env.OKTA_URL}`,
  client_id: `${process.env.OKTA_CLIENT_ID}`,
  redirect_uri: `${process.env.HOST}:${process.env.PORT}/implicit/callback`,
  scope: 'openid profile email'
})
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
