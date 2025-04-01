const express = require('express')
const app = express()

const productModel = require('../src/models/productModel')

app.use(express.json())

app.get('/modelos', async (req, res) => {
    try {
        const modelos = await productModel.find({})
        res.status(200).json(modelos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.get('/modelos/:id', async (req, res) => {
    try {
        const id = req.params.id
        const modelos = await productModel.findById(id)
        res.status(200).json(modelos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.post('/modelos', async (req, res) => {
    try {
        const modelos = productModel.create(req.body)
        res.status(201).json(modelos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.patch('/modelos/:id', async (req, res) => {
    try {
        const id = req.params.id
        const modelos = await productModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(modelos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.delete('/modelos/:id', async (req, res) => {
    try {
        const id = req.params.id
        const modelos = await productModel.findByIdAndDelete(id)
        res.status(200).json(modelos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

const port = 3000
app.listen(port, () => console.log(`Rodando na porta ${port}`))


