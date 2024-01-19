const express = require('express')

/**
 * initializes express application instance and returns it
 * @returns
 */
const createServer = () => {
  /**
   * initializing app instance
   */
  const app = express()

  // initializing server port to run
  const PORT = process.env.PORT || 8000

  // listen to the server port
  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
  })

  return app
}

module.exports = createServer
