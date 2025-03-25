import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { name } from 'ejs';



const App = () => {
const [first, setfirst] = useState(null)

  useEffect(() => {
    geturlData()
  
  }, [])
const userID = 123;
const geturlData = async () =>{
axios.get(`http://localhost:3000/user/${userID}`,{
  params:{name:"ayush",age:20},
  headers:{Authorization:'Bearer abc123'}
}).then(response=>{
  console.log("Response",response.data.data)
  setfirst(response.data.data)
}).catch((err)=>{
  console.log(err)
})
}


  return (
    <div>
{
first !== null && first.map((elem)=>{
  return(
  <div><h1>hshsh</h1></div>
  )
})
}
    </div>
  )
}

export default App
