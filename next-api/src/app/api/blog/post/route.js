import { NextResponse } from "next/server"
export  async function GET(req){
 
  const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{
      headers: {
        'content-type': 'application/json' ,
      }
  })

const post = await res.json();
// const pos = post.map(post => {
//   const { id, title } = post;
//   return { id, title };
// });
// ither  ap na jo map jagaya ha wo sirf id or title return kar raha ha iswi
//wo tu mene comment krdia ab tu whole api jani ni chayie ?or odr se map hu
return NextResponse.json({ data : post}); // is data ki waja sa
} 