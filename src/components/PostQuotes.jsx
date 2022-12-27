import React, { useEffect, useState } from 'react'
import quotesServices from '../services/client_services/quotes-services';
import PostQuote from './PostQuote';



const PostQuotes = () => {

const [posts,setPosts]=useState([])

  useEffect(()=>{
    quotesServices.getQuotes()
    .then(res=>{
     // console.log(res.data)
      setPosts(res.data.quotes)
      //console.log(posts)
      
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  


  
    
      return <div className="posts">
    { posts.map(post=>(
      <PostQuote post={post} key={post.id}/>
    ))}
  </div>;
}

export default PostQuotes