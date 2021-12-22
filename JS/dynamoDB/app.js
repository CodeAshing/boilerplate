const express = require('express')
const { getCharacter, getCharacterById, addOrUpdateCharacter, deleteCharacterById} = require('./dynamo')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/characters/:id',async(req, res) => {
    const id = req.params.id
    try {
        const characters = await getCharacterById(id)
        res.json(characters)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:"Something went wrong"})
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))