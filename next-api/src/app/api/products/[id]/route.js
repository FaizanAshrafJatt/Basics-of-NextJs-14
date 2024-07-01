import { NextResponse } from "next/server"

// export const GET = async(req ,context) => {

//   // console.log("Req : " , req)


//   //context mene istemal kia taake jo mene seearch kia he wo get krlia jay or wo hamne get krlia with the help of context
//   console.log("Context is : " , context)
//   console.log("context params is : " , context.params)
//   console.log("context params id is : " , context.params.id)
//   return NextResponse.json({"msg" : "Dynamic routing"})

// }



//we can also create it by using params : 
export const GET = async(req ,{params}) => {

  // console.log("Req : " , req)



  console.log("context params id is : " ,params.id)
  return NextResponse.json({"msg" : "Dynamic routing"})

}