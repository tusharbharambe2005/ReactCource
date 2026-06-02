import React, { useEffect, useState } from 'react'

const App = () => {
  const [aNum, setAnum] = useState(0)
  const [bNum, setBnum] = useState(0)

  function aChange(){
    console.log("a is change")
  }

  function bChange(){
    console.log("b is change")
  }

  useEffect(function(){
    aChange()
  },[aNum])

  useEffect(function(){
    bChange()
  },[bNum])


  return (
    <div>
      <h1>A is {aNum}</h1>
      <h1>B is {bNum}</h1>

      <button onClick={()=>{
        setAnum(aNum+1)
      }}>A</button>


      <button onClick={()=>{
        setBnum(bNum-1)
      }}>B</button>
    </div>
  )
}

export default App