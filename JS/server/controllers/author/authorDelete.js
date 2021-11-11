const authorDelete=(connection)=>(req,res)=>{ 
    const {id,name}=req.body

    const filter = {}

    id? filter['id']=id : 0
    name? filter['name']=name : 0

    connection.then(client => {
    const author = client.db('news').collection('author')  

    const quotesCollection = author.deleteOne(filter)
    .then(results => {
    try {
        res.send(results.deletedCount? "Deleted" :"record not found");
      } catch (error) {
        res.status(500).send(error);
      }
    })
    .catch(error => console.error(error))
    })
}

module.exports={
  authorDelete:authorDelete
}