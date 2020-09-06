import React from 'react';
import {Button} from "@material-ui/core"
import "./Login.css"

import {auth, provider} from "./firebase"
import {useStateValue} from "./StateProvider"
import {actionType} from "./reducer"



const Login = (props) => {
 const [{state}, dispatch] = useStateValue()

 const signIn=()=>{

 	auth.signInWithPopup(provider).then((result)=>{
 		console.log(result.user)
 		dispatch({
 			type: 'SET_USER',
 			user : result.user
 		})
 	}).catch((err)=>console.log(err.message))

 }	
  return (
    <div className="login">
    	<div className="login">
    		<img  
    			src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""
    		/>
    		<img src="https://png.pngtree.com/png-vector/20190723/ourlarge/pngtree-facebook-name-with-back-shadow-png-image_17391.jpg" alt=""/>
    	</div>
    	<Button type="submit" onClick={signIn}>Login</Button>
    </div>
  )
}

export default Login;