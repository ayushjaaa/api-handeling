import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { name } from 'ejs';



const App = () => {
const [first,error,lording] =  customRectQuery('http://localhost:3000/api/products')


if(lording) return <h1>lording</h1>
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

const customRectQuery = (urlpath) =>{
  const [first, setfirst] = useState(null)
const [error, seterror] = useState(false)
const [lording, setlording] = useState(false)
const userID = 123;
  useEffect(() => {
    // used iifi funtion
;(async()=>{
 try {
  setlording(true)
  seterror(false)
   const response = await axios.get(urlpath)
   console.log(response)
   setfirst(response.data)
   setlording(false)
 } catch (error) {
  seterror(true)
  setlording(false)
 }
})()
  return[first,error,lording]
  }, [])

}