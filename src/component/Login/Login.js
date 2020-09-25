
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import Fblogo from '../../Images/Icon/fb.png';
import Google from '../../Images/Icon/google.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setNewUser] = useState(false);
 const [user, setUser] = useState({
   isSignedIn: false,
   newUser: false,
   name: '',
   email:'',
   password:'',
   photo:'',
 });

 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 const history =useHistory();
 const location = useLocation();
 let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

    /*------- Sign In part start -------*/
  const handleSignIn = ()=>{
    firebase.auth().signInWithPopup(googleProvider)
    .then( res=>{
      const {displayName, photoURL, email}= res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      }
      setUser(signedInUser);
    })
    .catch(err =>{
      
    })
  }

  const handleFbLogIn =()=>{
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      
      var token = result.credential.accessToken;
      var user = result.user;
    
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
    });
  }
    /*------- Sign In part End -------*/

    /*------- Sign Out part start -------*/ 
  const handleSignOut = ()=>{
        firebase.auth().signOut()
        .then(res => {
          const sineOutUser = {
            isSignedIn: false,
            name: '',
            email:'',
            photo:'',
            error:'',
            success: false,
          }
          setUser(sineOutUser);
        })
        .catch(err => {
          
        });
  }
  /*------- Sign Out part end -------*/ 

  const handleBlur = (event)=>{
    let isFieldValid = true ;
    if(event.target.name === 'email'){
       isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && isPasswordHasNumber;
    }
    if(isFieldValid){
      
      const newUserInfo = {...user};
      newUserInfo[event.target.name]= event.target.value;
      setUser(newUserInfo);
    }
  }
/* ......new User login part start......*/
  const handleSubmit = (event)=>{
      if(newUser && user.email  && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch(error=> {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
      }
    /* ......new User login part end......*/
      if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
         
        })
        .catch(function(error) {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
      }
      event.preventDefault(1);
  }
    
  const updateUserName = name =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }


  return (
    <div className="App">
     
     {
       user.isSignedIn && <div>
              <h2>Name : {user.name}</h2>
              <p>Your Email : {user.email}</p>
              <p></p>
              <br/>
              <img src={user.photo} alt=""/>
          </div>
}
    <div className="login-from-style">
         <h3>Create on account</h3>
        <form action="" onSubmit={handleSubmit}>
              {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="First Name" required/>}
              <br/>
              {newUser && <input type="text" name="last-name" onBlur={handleBlur} placeholder="Last Name" required/>}
              <br/>
              <input type="email" name="email" onBlur={handleBlur} id=""  placeholder="Username or Email" required/>
              <br/>
              <input type="password" name="password" id="" onBlur={handleBlur}  placeholder="Password" required/>
              <br/>
              {newUser && <input type="password" name="password" id="" onBlur={handleBlur}  placeholder="Confrim Password" required/>}
              <br/>
              <input type="checkbox" name="" id=""/> <label htmlFor="">Remember Me</label>
              <br/>
              <input className="login-btn"  variant="warning" size="lg" block type="submit" value="Log In"/>
              <br/>
              
              <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
              <label htmlFor="newUser">Don't have a account? <span onChange={()=> setNewUser(!newUser)}>Create an account</span> </label>
          </form>
    </div>
      <p>or</p>
     <button className="sign-btn-style" onClick={handleFbLogIn}><img className="login-logo" src={Fblogo} alt=""/> Continue with Facebook</button>
     <br/>
     {
       user.isSignedIn ? <button className="sign-btn-style" onClick={handleSignOut}>Sign Out</button> :
      <button className="sign-btn-style" onClick={handleSignIn}><img className="login-logo" src={Google} alt=""/> Continue with Google</button>
     }
       <p style={{color:'red'}}>{user.error}</p>
      {user.success && <p style={{color:'green'}}>{newUser ? 'Registration': 'Logged In'} Successfully</p>}
     
    </div>
  );
}



export default Login;