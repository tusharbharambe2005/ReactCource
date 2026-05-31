import React, { useState } from 'react'

const App = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submitHandler=(e) =>{
      e.preventDefault()
      console.log("First name",firstName);
      console.log("last name",lastName);
      
      setFirstName('')
      setLastName('')
    }




  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} type="text" placeholder='Enter First Name' />
        <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} type="text" placeholder='Enter Last Name' />

        <button>Submit</button>

      </form>

    </div>
  )
}

export default App