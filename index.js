const express = require('express')
const path = require('path')
const connectDB = require('./server/db/connection')
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: ['http://localhost:4200']
}
app.use(cors(corsOptions))
app.use(express.json())
const PORT = 3000;

try {
  connectDB();
  app.use(express.static(path.join(__dirname, 'dist')))
  app.use('/', function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
  app.use('/api/example', require('./server/routes/example-route'))
  app.use('/user', require('./server/routes/user.controller').userRouter)
  app.get('/api/*', (req, res) => {
    res.send({
      message: 'Endpoint not found',
      type: 'error'
    })
  })
  app.get('*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
  app.listen(PORT, () => console.log(`Application started successfully on port: ${PORT}!`))
} catch (error) {
  console.log(error)
}
