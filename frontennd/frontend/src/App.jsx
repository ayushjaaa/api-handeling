// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const App = () => {
//   const [search, setsearch] = useState("")
//   const [data, setdata] = useState(null)

//  async function searchAPI(params) {
    
//       try{
//        const respone =  await axios.get(`http://localhost:3000/api/products?search=${search}`)
//        setdata(respone.data)
//       }catch(err){
//        console.log(err)
//       }

//   }

// async function allProductAPI(params) {
//   try{
//     const respone =  await axios.get(`http://localhost:3000/api/products`)
//     setdata(respone.data)
//    }catch(err){
//     console.log(err)
//    }
// }


//   useEffect(() => {
// const time = setTimeout(() => {
//     search ? searchAPI() :allProductAPI()
// }, 3000);
// return ()=>{
// clearTimeout(time)
// }
//   }, [search])
  

//   return (
//     <div>
//       <input value={search} type="text" name="" id=""  onChange={(e)=>setsearch(e.target.value)}/>
//       {
//      data !== null && data.length > 0 ? (
//         data.map((item, index) => <li key={index}>{item.name}</li>) // ✅ Properly displaying data
//       ) : (
//         <p>No results found</p>
//       )
//       }
//     </div>
//   )
// }

// export default App


// apply debunsing //


