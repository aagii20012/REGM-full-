app.post('/api/find', (req, res) => {
    const data=req.body.data
    console.log(data)
    var skip=true
    User.find({email:data['email']}).then(function(result){
      if(result.length==0)
        {
          res.send("mail not found")
          skip=false
        }

    }).catch(function(error){
      console.log(error)
    })
    if(skip)
    {
      User.findOne({email:data['email'],password:data['password']}).then(function(result){
        if(result==null)
          {
            res.send("wrong password")
          }else res.send(result)
      })
    }

})

app.post('/api/get/user',(req,res)=>{
  value=User.find({isAdmin:'false'}).then(function(result){
    res.send(result)
  })
})

app.post('/api/create', (req,res)=>{
  data=req.body
  var result
  value=User.create(data)
  .then(response=>{
    result="data created"
    }).catch(error=>{
      if(error.code==11000){
         res.json(error.keyPattern)
      }else  result="something wrong"
      return result
    })
})