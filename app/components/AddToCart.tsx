'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>AddToCart
        <hr></hr>
        <button className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' onClick={()=>console.log('Clicked')}>Click to add</button> 

        <hr></hr>
        <button className='btn btn-success' onClick={()=>console.log('Clicked')}>Button DaisyUI</button> 
    </div>
  )
}

export default AddToCart