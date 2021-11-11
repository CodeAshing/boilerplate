const cors = require('cors')
const express = require('express');
;const MongoClient = require('mongodb').MongoClient
const { authorGet } = require('./controllers/author/authorGet');
const { authorUpdate } = require('./controllers/author/authorUpdate');
const { authorDelete } = require('./controllers/author/authorDelete');
const { authorInsert } = require('./controllers/author/authorInsert');

const app = express();

const connection = MongoClient.connect('mongodb+srv://starmarketing:Crystalball007@cluster0.u64nt.mongodb.net',
 { useUnifiedTopology: true })

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

app.get('/',(req,res) =>{
    res.send('Server is ok')
});

app.get('/author',authorGet(connection))
app.put('/author',authorUpdate(connection))
app.post('/author',authorInsert(connection))
app.delete('/author',authorDelete(connection))

app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`I am running!!! on ${process.env.PORT}`)
})