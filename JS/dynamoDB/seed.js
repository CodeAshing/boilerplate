const axios = require('axios')
const {addOrUpdateCharacter} = require('./dynamo')

const seedData = async()=> {
    const hp_url = 'http://hp-api.herokuapp.com/api/characters';
    try{
        const {data: characters } = await axios.get(hp_url)

        const characterPromises = characters.map((character,i)=>
            addOrUpdateCharacter({...character, id: i+'' })
            )
        await Promise.all(characterPromises)
    }
    catch(error){
        console.error(error)
        console.log('aaahhhhh')
    }
}
seedData()