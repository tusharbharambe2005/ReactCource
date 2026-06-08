import React, { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'
import Navbar2 from './Navbar2'


const Navbar = () => {
    let [theme] = useContext(ThemeContextData)
  return (
    <div className={theme}>
        <h1>Sheryians</h1>
        <Navbar2/>
    </div>
  )
}

export default Navbar