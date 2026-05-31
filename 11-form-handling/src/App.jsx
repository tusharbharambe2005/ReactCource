import React from 'react'

const App = () => {


    const formSubmite =(e) =>{
      e.preventDefault()
      
      console.log("form submited");
      
    }

  return (
    <div>
      <form >
        <input onChange={(e)=>{
            console.log(e.target.value)
        }} type="text" placeholder='Enter your name'/>
        <button onClick={(e)=>{
          formSubmite(e)
          
        }}>Submit</button>
      </form>
    </div>
  )
}

export default App