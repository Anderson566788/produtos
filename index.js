const dotenv = require('dotenv')
dotenv.config()
const connectToDataBase = require('./database/connect')
require('./modules/express')

const db = connectToDataBase()

