//------------Connect to mongodb on mLab via Mongoose---------------//
const mongoose = require('mongoose')

const config = { mongoUrl: 'mongodb://db_usr:db_pass@ds249418.mlab.com:49418/swgarage' }
const db = mongoose.connection

mongoose.connect(config.mongoUrl)

// Event handlers for Mongoose
db.on('error', (err) => console.log(`Mongoose: Error: ${err}`))
db.on('open', () => console.log('Mongoose: Connection established'))
db.on('reconnected', () => console.info('Mongoose reconnected!'))
db.on('disconnected', () => {
    console.log('Mongoose: Connection stopped, recconect')
    mongoose.connect(config.mongoUrl, options)
})

module.exports = db