import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  // api call using fetch
  // async function getData(params) {
  //   const responce = await fetch('https://jsonplaceholder.typicode.com/todos/10')
  //   console.log(responce)
  // }

  //api call using axios
  const  getData = async () =>{
     const responce = await axios.get('https://picsum.photos/v2/list')

     console.log(responce.data)
     setData(responce.data)
     
  }
  
  

  return (
    <div>
      
      <button onClick={getData}>Click</button>

      {data.map((elem,idx)=>{
          return <div>
            <h1>{elem.author} {idx+1}</h1>
          </div>
      })}
    </div>
  )
}

export default App