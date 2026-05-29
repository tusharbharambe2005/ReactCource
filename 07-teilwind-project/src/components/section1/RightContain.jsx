import React from 'react'
import RightCard from './RightCard'

const RightContain = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>

      {props.users.map(function(elms,idx){
      return <RightCard key={idx} color={elms.color} id={idx} img={elms.img} tag={elms.tag}/>

      })}
    
    </div>
  )
}

export default RightContain