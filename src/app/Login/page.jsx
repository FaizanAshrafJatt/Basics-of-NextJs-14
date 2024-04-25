'use client'
import React from 'react'

const page = () => {
  function home(){
    let e  = document.querySelector('.jatt').value 
    console.log(e)   
  }
  return (
  <div>
   <input type="text" className='jatt' placeholder='Write something here ' style={{color:"red"}}  onChange={home} />
  </div>
  )
}

export default page
