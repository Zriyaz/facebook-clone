import React,{useState, useEffect} from 'react';


import Post from "./Post"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import "./Feed.css"
import db from "./firebase"

const Feed = (props) => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{

    db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
        id: doc.id,
        data : doc.data()
      })))
    )
  }, [])

  console.log(posts)
  return (
    <div className="feed">
     <StoryReel />
      <MessageSender />

       {
        posts.map((post)=>(
          <Post 
            key= {post.data.id}
            profilePic ={post.data.profilePic}
            image ={post.data.image}
            message={post.data.message}
            username={post.data.username}
            timestamp={post.data.timestamp}
          />
        ))
       }
    </div>
  )
}

export default Feed;