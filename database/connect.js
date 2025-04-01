const mongoose = require('mongoose')

const connectToDataBase = async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.idvpznw.mongodb.net/database?`)
        console.log("Conexão ao banco de dados realizada com sucesso")
        return db

    } catch (error) {
        console.log(`Ocorreu um erro ao banco ${error.message}`)
    }
}

module.exports = connectToDataBase