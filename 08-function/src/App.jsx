import React from 'react'

const App = () => {
  function clickButton(params) {
    console.log(params);

  }
  return (

    <input onClick={(elms)=>{
      clickButton(elms.target.value)
      
    }} type="text" placeholder='enter name' className="btn" />
  )
}

export default App