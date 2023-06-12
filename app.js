const config = require('./utils/config')
const express = require('express')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

// const mongoUrl = 'mongodb://localhost/bloglist'
logger.info('connecting to', config.MONGODB_URI)
const mongoURL = config.MONGODB_URI
mongoose.connect(mongoURL)
    .then(() => {
        logger.info('connected to', config.MONGODB_URI)
    })
    .catch(error => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.static('build'));
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app