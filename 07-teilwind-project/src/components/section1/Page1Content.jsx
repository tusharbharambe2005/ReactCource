import React from 'react'
import LeftContain from './LeftContain'
import RightContain from './RightContain'

const Page1Content = (props) => {
  // console.log(props)
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>

        <LeftContain/>
        <RightContain users={props.users}/>
    </div>
  )
}

export default Page1Content