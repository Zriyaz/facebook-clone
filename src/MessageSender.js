import React, {useState, useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import "./MessageSender.css"
import {useStateValue} from "./StateProvider"
import db from "./firebase"
import firebase from "firebase"


const MessageSender = (props) => {

 const [input, setInput] = useState("")
 const [imageUrl, setImageUrl] = useState("")
  const [{user}, dispatch] = useStateValue()




  const handleSubmit =(e) =>{
	e.preventDefault()

    db.collection('posts').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username : user.displayName,
        image: imageUrl
    })

	setImageUrl("")
	setInput("")
  }	
  return (
    <div className="messageSender">
    	<div className="messageSender__top">
    		<Avatar src={user.photoURL} />
    		<form>
    			<input 
    			value ={input}
    			onChange = {(e)=>setInput(e.target.value)}
    			className="messageSender__input" placeholder="What's on your mind?" />

    			<input
    			value={imageUrl}
    			onChange ={(e)=>setImageUrl(e.target.value)} 
    			placeholder="image URL (optional)" />
    			<button onClick={handleSubmit} type="submit">Hidden Submit</button>
    		</form>
    	</div>

    	<div className="messageSender__bottom">
    		<div className="messageSender__option">
    			<VideocamIcon style={{color:"red"}} />
    			<h3>Live Video</h3>
    		</div>
    		<div className="messageSender__option">
    			<PhotoLibraryIcon style={{color:"green"}} />
    			<h3>Photo/Video</h3>
    		</div>
    		<div className="messageSender__option">
    			<InsertEmoticonIcon style={{color:"orange"}} />
    			<h3>Felling/Activity</h3>
    		</div>
    	</div>
    </div>
  )
}

export default MessageSender;