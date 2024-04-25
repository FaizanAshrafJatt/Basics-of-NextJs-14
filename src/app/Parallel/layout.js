"use client"

import React, { useState } from "react";
export default function Layoutwala({children , buttonnav , mainnav}){
let  [insta , setinsta] = useState(false);
  
  const ok = ()=> {
    console.log("pakistan")
    setinsta(!insta);
    // I can use setinsta(true ) also and can give simple value to change on button Click 
    // butt all i want was the value should change continuously when I click on the button 
    // continoulsy
  }



  return (
 
<section>
{children}
  {/* {buttonnav}
  {mainnav} */}
  
 
  <button className="p-5 m-5 bg-blue-50 text-slate-900" onClick={ok}>Click Me</button> {/* Remove parentheses after ok */}

  { insta ?  buttonnav : mainnav}



  </section>
  )
}