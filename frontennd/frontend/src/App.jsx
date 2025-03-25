// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { name } from 'ejs';



// const App = () => {
// const [first,error,lording,search,setsearch] =  customRectQuery('http://localhost:3000/api/products')


// if(lording) return <h1>lording</h1>
// if(error) return  <h1>somthing went wrong</h1>
// console.log(search)

//   return (
//     <div>
//   <input type="search" name="" id="" value={search} onChange={(e)=>setsearch(e.target.value)} />
// {
// first !== null && first.map((elem)=>{
//   return(
//   <div><h1>{elem.name}</h1></div>
//   )
// })
// }
//     </div>
//   )
// }

// export default App



// //custom hooks //
//   const customRectQuery = (urlpath) =>{
//     const [first, setfirst] = useState(null)
//   const [error, seterror] = useState(false)
//   const [lording, setlording] = useState(false)
//   const [search, setsearch] = useState("")
//   const userID = 123;
//     useEffect(() => {
//       // used iifi funtion
//   ;(async()=>{
//   try {
//     setlording(true)
//     seterror(false)
//     const response = await axios.get(`${urlpath}?search=${search}`)
//     console.log(response)
//     setfirst(response.data)
//     setlording(false)
//   } catch (error) {
//     seterror(true)
//     setlording(false)
//   }
//   })()

//     }, [search])
//     return[first,error,lording,search,setsearch]
//   }


import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const [first, setFirst] = useState([]); // ✅ Default to an empty array
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Fixed spelling
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`http://localhost:3000/api/products?search=${search}`);
        setFirst(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

  
  }, [search]);

  // ✅ Ensure focus only on first render
  useEffect(() => {
    inputRef.current?.focus();
  }, []); // Runs only once when component mounts

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />
      {first.length > 0 ? (
        first.map((elem) => (
          <div key={elem.id}>
            <h1>{elem.name}</h1>
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
};

export default App;



//custom hooks //
  // const customRectQuery = (urlpath) =>{
  //   const [first, setfirst] = useState(null)
  // const [error, seterror] = useState(false)
  // const [lording, setlording] = useState(false)
  // const [search, setsearch] = useState("")
  // const userID = 123;
  //   useEffect(() => {
  //     // used iifi funtion
  // ;(async()=>{
  // try {
  //   setlording(true)
  //   seterror(false)
  //   const response = await axios.get(`${urlpath}?search=${search}`)
  //   console.log(response)
  //   setfirst(response.data)
  //   setlording(false)
  // } catch (error) {
  //   seterror(true)
  //   setlording(false)
  // }
  // })()

  //   }, [search])
  //   return[first,error,lording,search,setsearch]
  // }