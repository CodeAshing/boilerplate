const aws = require('aws-sdk')
require('dotenv').config();

aws.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})      

const dynamoClient = new aws.DynamoDB.DocumentClient()
const TABLE_NAME = 'starFormData'


const getCharacter = async() =>{ 
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters); 
    return characters;
}
const getCharacterById = async(id) =>{
    const params = {
        TableName: TABLE_NAME,
        key:{
            id
        }
    }
    return await dynamoClient.get(params).promise()
}

const deleteCharacterById = async(id) =>{
    const params = {
        TableName: TABLE_NAME,
        key:{
            id
        }
    }
    return await dynamoClient.delete(params).promise()
}

const addOrUpdateCharacter = async(character) =>{
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }
    return await dynamoClient.put(params).promise();
}

module.exports ={
    dynamoClient,
    getCharacterById,
    deleteCharacterById,
    getCharacter,
    addOrUpdateCharacter,    
}