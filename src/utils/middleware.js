const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

/**
 * initialize common middleware in the app
 * @param {import('express').Application} app
 */
const initializeMiddleware = (app) => {
  // HTTP request logging in console
  app.use(morgan('dev'))

  // cors middleware to enabling pre-flight
  app.use(cors())

  // for parsing application/xwww-
  app.use(express.urlencoded({ extended: true }))

  // To parse the incoming requests with JSON payloads
  app.use(express.json())
}

module.exports = initializeMiddleware
