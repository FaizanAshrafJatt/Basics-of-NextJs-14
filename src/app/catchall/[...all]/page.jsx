import React from 'react'

const catchall = ({params}) => {

  console.log({params});

  return (
    <div>
      this is catch all 
    </div>
  )
}
/*probbaly isko gor se deka jay tu jo ham odr searrch bar yya url me search rkeingy wo is string me store 
hota jay ga 
dynamic route me ham srf ik hi layer ko bar bar call rkkste hein lakin sari post ke andar ki cheezo ko catch krne 
ke liye ye Cath all use kia jata he 
*/

export default catchall
