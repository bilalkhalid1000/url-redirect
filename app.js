const createServer = require('./src/utils/server')
const initializeMiddleware = require('./src/utils/middleware')
const router = require('./src/router')

/**
 * Global Variables
 */
global.root_directory = __dirname

const app = createServer()

// initializing common middleware
initializeMiddleware(app)

// initializing app router
router(app)
