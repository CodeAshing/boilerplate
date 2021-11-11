const authorGet=(connection)=>(req,res)=>{ 
    const {id,name}=req.body

    // console.log( id? 'a': id? {"id":id} : 1)
    const filter = {}

    id? filter['id']=id : 0
    name? filter['name']=name : 0

    connection.then(client => {
    const author = client.db('news').collection('author')  

    const quotesCollection = author.find(filter).toArray()
    .then(results => {
    try {
        res.send(results);
      } catch (error) {
        res.status(500).send(error);
      }
    })
    .catch(error => console.error(error))
    })
}

module.exports={
  authorGet:authorGet
}