const siteRouter = require('./site')

/**
 * main app router
 * @param {import('express').Application} app
 */
const router = (app) => {
  app.use('*', siteRouter)
}

module.exports = router
