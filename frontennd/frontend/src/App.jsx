import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { name } from 'ejs';



const App = () => {
const [first, setfirst] = useState(null)
const [error, seterror] = useState(second)
  useEffect(() => {
    // used iifi funtion
;(async()=>{
 try {
  seterror(false)
   const response = await axios.get('http://localhost:3000/api/products')
   console.log(response)
   setfirst(response.data)
 } catch (error) {
  seterror(true)
 }
})()
  
  }, [])
const userID = 123;



if(error) return  <h1>somthing went wrong</h1>
  return (
    <div>
{
first !== null && first.map((elem)=>{
  return(
  <div><h1>{elem.name}</h1></div>
  )
})
}
    </div>
  )
}

export default App
