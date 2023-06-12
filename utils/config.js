require('dotenv').config()

const PORT = 3003 || process.env.PORT
const MONGODB_URI = 'mongodb+srv://admin:cF3E4jO4FUCxumuv@cluster0.6jvwluf.mongodb.net/Blog?retryWrites=true&w=majority' 
// process.env.MONGODB_URI

module.exports = { MONGODB_URI, PORT }