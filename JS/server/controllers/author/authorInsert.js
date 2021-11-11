const authorInsert=(connection)=>(req,res)=>{ 
    const {title,name}=req.body
    const filter = {}

    name? filter['name']=name : 0
    title? filter['title']=title : 0

    connection.then(client => {
    const author = client.db('news').collection('author')  

    const quotesCollection = author.insert(filter)
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
  authorInsert:authorInsert
}