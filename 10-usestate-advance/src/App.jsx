import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState([10,20,30])

    // const btnClick = () =>{
    //   const newNum = [...num] //distructure in array
    //   newNum.push(90)
    //   setNum(newNum)
    // }

    // const btnClick = () =>{
    //   const newData = {...num}//distructure in object
    //   newData.user = "Krishna"
    //   newData.Age = 22

    //   setNum(newData)
    // }

                                                  //batch//
    // const btnClick = () =>{
    //     setNum(prev => (prev+2))
    //     setNum(prev => (prev+2))
    // }

    //Object batch
    // const btnClick= () =>{
    //   setNum(prev=>({...prev, user:"Krishna"}))
    //   setNum(prev=>({...prev,Age:22}))

    // }

    //arrya batch
    const btnClick = () =>{
        setNum(prev=>([...num,"Tushar"]))
    }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}> Click hear</button>
    </div>
  )
}

export default App