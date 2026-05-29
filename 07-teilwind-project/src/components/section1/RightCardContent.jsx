import React from 'react'

const RightCardContent = (props) => {
  return (
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center font-semibold text-xl'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed mb-14 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, beatae id. Eius nostrum blanditiis magnam!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='rounded-full font-medium px-8 py-2 text-white'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='rounded-full font-medium px-3 py-2 text-white'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent