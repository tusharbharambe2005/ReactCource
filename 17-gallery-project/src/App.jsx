import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [scrollImage, setScrollImage] = useState(12)

  const getData = async() =>{
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${scrollImage}`)
    console.log(responce.data)
    setUserData(responce.data)
  }

  useEffect(()=>{
      getData()
  },[index])

  let printUserData = "Loding..."
  
  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-47 w-50 overflow-hidden bg-white rounded-2xl ' >
          <img className='h-full w-full object-cover' src={elem.download_url} alt="img" />
        </div>
        <h1 className='font-bold text-lg' >{elem.author}</h1>
         </a>
      </div> 
      
    })
  }


  return (
    <div className='bg-black overflow-auto text-white h-screen w-full p-4 '>
      
      {/* <button className='bg-green-600 p-10 m-10 rounded' onClick={getData}>Get Data</button> */}

      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-4 items-center'>
        <button
         className='bg-amber-400 text-black p-5 rounded m-12'
         onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
         }}
         >Prev</button>
         <h3>Page {index}</h3>
        <button 
        className='bg-amber-400 text-black p-5 rounded m-12'
        onClick={()=>{
          setIndex(index+1)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App