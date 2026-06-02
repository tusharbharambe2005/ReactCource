import React from 'react'

const App = () => {

  //add the localStorage item/data 
  const user = {"username":"Tushar","Age":21,"city":"Jalgaon"}

  localStorage.setItem("user",JSON.stringify(user)) //JSON.stringify are conver object to string 

  //get Data
  const data = localStorage.getItem('user')
  console.log(data);//string format
  console.log(JSON.parse(data))//convert text to object
  
  //remove item 
  localStorage.setItem("user1","Krishna")
  localStorage.removeItem("user1")//remove the selected item

  //clear all local storage and sesstion storage
  localStorage.clear()
  sessionStorage.clear()

  return (
  
    <div>App</div>
  )
}

export default App