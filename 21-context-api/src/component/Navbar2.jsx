import React, { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'
import { useCallback } from 'react'

const Navbar2 = () => {
    let data = useContext(ThemeContextData)

  return (
    <div className='navContent'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>{data[0]}</h4>
        </div>
  )
}

export default Navbar2