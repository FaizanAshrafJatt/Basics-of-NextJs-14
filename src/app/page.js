"use client"
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'

const page = () => {
  const [count , setcount ] = useState(0);
  
  return (
    <div>
      THis is gompe page 
      <div className='bg-green-800 text-white p-5 m-5 text-xl font-bold'> {count}</div>
       
      <br />
<button className='bg-red-700  text-white p-5 m-5' onMouseEnter={() => setcount(count - 1)}> idr enter krke dikha fr btou tujhe</button>
      <button className='bg-slate-700 text-white text-xl p-5 ms-4 mt-5 mb-5 ' onClick={()=> setcount(count+1)}> Id click kr bach jay ga  </button>
    <Navbar />
    </div>
  )
}

export default page
