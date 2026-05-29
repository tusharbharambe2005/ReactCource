import React from 'react'

const Card = (Props) => {
  return (
    <>
    <div className='card'>
        <img src={Props.img} alt="image" />
        <h1>{Props.user}, {Props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
    </div>
    </>
  )
}

export default Card