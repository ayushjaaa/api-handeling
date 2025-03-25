const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// http://localhost:5173/api/user/?serach=ayush
app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    const {name,age} = req.query;
    const authheader = req.headers.authorization
    console.log(authheader)
const data = [{
    name:"ayus",
    id:1
},{ name:"rahul",
    id:2}]
setTimeout(() => {
    res.json({
        data,
        messsage:"Use Deyail",
        userId,
    name,
    age,
    authheader:authheader

    })
}, 300);
})

app.post('/user',(req,res)=>{
    const {name,age} = req.body;
    res.json({messsage:age})
})


app.get('/api/products',(req,res)=>{
    const products = [{id:1,name:'ayush'},{id:2,name:"ankit"}]
const search = req.query.search?.toLowerCase()

    if(search){
      const filter =   products.filter((elem)=> elem.name.includes(req.query.search))
      console.log(filter)
      return  res.send(filter)
    }


setTimeout(() => {
    res.send(products)
}, 3000);

})
app.listen(3000,()=>{
    console.log('server is running on port 5000')
})