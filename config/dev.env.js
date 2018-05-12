'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OKTA_URL: '"https://dev-602745.oktapreview.com"',
  OKTA_CLIENT_ID: '"0oaeyqubq89dv65CQ0h7"',
  HOST: '"http://localhost"',
  PORT: '8080'
})
