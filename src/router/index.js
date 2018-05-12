import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Home from '@/components/Home'
import Protected from '@/components/Protected'

Vue.use(Auth, {
  issuer: `${process.env.OKTA_URL}`,
  client_id: `${process.env.OKTA_CLIENT_ID}`,
  redirect_uri: `${process.env.HOST}:${process.env.PORT}/implicit/callback`,
  scope: 'openid profile email'
})
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/protected',
      component: Protected,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
