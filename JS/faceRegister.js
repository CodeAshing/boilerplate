const axios = require('axios')
const FormData = require('form-data')
var fs = require('fs');


const faceRegister = (connection) => (req,res,next)=>{ 
  
  fs.writeFileSync("./uploads/programming.mp4", req.file.buffer);
  
  var form = new FormData();    
  let video= req.file.buffer
  let id= req.body.id
  
  form.append('id', req.body.id);
  form.append('buffer',video);

  // form.append('video', video, 'video0.mp4');

  console.log(req.file)

  // axios({
  //   method: "post",
  //   url: "http://localhost:5000/register",
  //   data: form,
  //   headers: {
  //     'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
  // },
  axios({
      method: "post",
      url: "http://localhost:5000/register",
      data: {"id":req.body.id,"video":video},
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res.data)
  })
  .catch(error => {
    console.error(error)
  })



  //  let quotesCollection = '';
  //  let code = req.user.code
  //   let date_ob = new Date();
  //   let date = ("0" + date_ob.getDate()).slice(-2);
  //   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  //   let year = date_ob.getFullYear();
  //   let hours = date_ob.getHours();

  



    // connection.then(client => {
    //   let employers = client.db('Attendance_System').collection('summary')  
    //   quotesCollection = employers.updateOne({EmpCode:parseInt(code)},{$set: {["summary."+year+"."+month+"."+date+".start"]:req.body}})
     

    //     quotesCollection.then(results => {
    //     try {
    //         res.status(200).send(results)
    //         next()
    //       } catch (error) {
    //         res.status(500).send(error);
    //       }
    //     })
    //     .catch(error => console.error(error))
    // })
}

module.exports={
    faceRegister:faceRegister
}