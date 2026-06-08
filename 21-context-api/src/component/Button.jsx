import React, { useContext } from 'react'
import { ThemeContextData } from '../Context/ThemeContext'


const Button = () => {
    let [theme,setTheme] = useContext(ThemeContextData)
  return (
    <div>
        <button onClick={()=>{
            if (theme=="light")
                setTheme("dark")
            else
                setTheme("light")
        }}>Change Theme</button>
    </div>
  )
}

export default Button