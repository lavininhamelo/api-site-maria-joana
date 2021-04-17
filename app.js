import express, { json } from 'express'
import router from './src/routes/routes'
import './src/database/database'

class App {
  constructor() {
    this.server = express()
    this.middleware()
    this.routes()
  }
  middleware() {
    this.server.use(json())
  }
  routes() {
    this.server.use(router)
  }
}

export default new App().server
