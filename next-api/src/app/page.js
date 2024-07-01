const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/post"  , {
    headers : {
      'Content-Type' : 'application/json', 

    },
    cache:'no-store'
    //to remove cache from the code ... it really sucks 
  })
  const posts = await res.json ()
  return posts
}
export default async function Home(){
  const allPosts = await getData();
  console.log(allPosts)
//ik senior bhai keh ry hein because all post is a object not array ok
  return (
    <div style={{background: 'black'}}>
      {
        //cache masla....
       //ye apne Date kio likha he ? 
       // caching issue tha kese remove kia ? 
       // ctrl+shift+r hard reload
       // ye tu kuch or hogya ok browser pe krna tha yp or bhai ye niche allpost? consile ma? ye ese kio likha he 
       // ? mark lagata han ta ka agr posts han sirf tb  hi next statement execute karo  ham simply wese ni krste jese krhe se odr se s
       // api sa object return kar raha is lia
       //ab title or body ana chayie id or title ?kio arha 
       // ab complete posts return ho rahi han jo bi jsonplaceholder sa aa raha ha
       allPosts?.data?.map((post , i) =>(
          <div key={i} style={{color:'white'}}>
          <h1 style={{color:'pink'}}>

            {post.title}
          </h1>
           
          <p>
            {post.body}
          </p>
          </div>
        ))
      }
      <h1>Home </h1>
    </div>
  )
}
