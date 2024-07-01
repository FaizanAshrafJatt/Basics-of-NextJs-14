import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET (req){
  // console.log(req);
   

  //Url Query Parms

// const {searchParams} = new URL(req.url) 
// const searchParams = req.nextUrl.searchParams;
// console.log(searchParams);
// console.log(searchParams.get("search"));

//Cookies
const cook1 = req.cookies

console.log("Cookie1 :" , cook1);
const cook2 = cookies();
console.log("Cookie2 :" , cook2);

return NextResponse.json({"msg" : "Hello  NextJs APi"})

}

//GET: Used to retrieve data. Data is sent in the URL.
//POST: Used to send data to create/update resources. Data is sent in the request body.



//most of the time log front end se backedn pe data bhjte hein or ye api end point hota he 
export async function POST(req){


  // console.log(req);


// jo data frontend se ayega osko captuer kee krna
//Request Body
// const res = await req.json();
//ab mene post man open kia he osme me data phenko ga as a frontend or ye isko capture krega 
// console.log("Repsnse json : " , res);

// ye ik form ka data jab form se data ham lete hein tu osko yaha pe store kese krna he bahi kese kese oski key or values nikalana
const formData = await req.formData();
console.log("This is a form data" , formData)
console.log(formData.get('Title'))
console.log(formData.get('Body'))
  return NextResponse.json({"msg" : "Post Sucess"})
  
}