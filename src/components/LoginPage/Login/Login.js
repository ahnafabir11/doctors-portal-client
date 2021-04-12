import './Login.css';
import React, { useState }  from 'react';
import { useContext } from 'react';
import { UserContext } from './../../../App';
import loginBg from '../../../images/loginBg.png';
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from './../../../firebase.config';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
    fullname: '',
  })

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then((res) =>{
      const providedData = res.user;
      const newUser = { ...user };
      newUser['fullname'] = providedData.displayName;
      newUser['email'] = providedData.email;
      newUser['photoURL'] = providedData.photoURL;
      setUser(newUser);
      setLoggedInUser(newUser);
      sessionStorage.setItem('loggedin', true);
      history.push(from);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUser = { ...user };
      newUser['errorMessage'] = errorMessage;
      setUser(newUser);
      sessionStorage.setItem('loggedin', false);
    })
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-5 mb-3">
          <div className="card card-body">
            <h3 className="text-center text-info">Log In</h3>

            <div className="form-group pt-5">
              <input className="form-control" placeholder="Your Email Address"/>
            </div>
            <div className="form-group pb-4">
              <input className="form-control" placeholder="Your Password" />
            </div>
            <button className="btn btn-info" onClick={handleGoogleLogin}>Google Login</button>
          </div>
        </div>
        <div className="col-md-7">
          <img src={loginBg} alt="" className="w-100"/>
        </div>
      </div>
    </div>
  )
}

export default Login;