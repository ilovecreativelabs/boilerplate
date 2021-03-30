/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const withPWA = require('next-pwa')
// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
