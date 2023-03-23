import {React, useState} from "react";
import {Axios} from 'axios'
import './components/login/login.css';
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import { Route, Router, Routes, Link  } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {

  // const [usernameReg, setUsernameReg] = useState("")
  // const [passwordReg, setPasswordReg] = useState("")

  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")

  const [loginStatus, SetLoginStatus] = useState("")


  const login = () => {
    Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    }).then ((response) => {
        if (response.data.message) {
          SetLoginStatus(response.data.message)
        } else {
          SetLoginStatus(response.data[0].username)
        }
    });
  };

  return(
    
    <div className="page"> 
     <div className="cover">
        <h1 className="header">LOGIN</h1>
        <input type="text" placeholder="Username" onChange={(e) => {
          setUsername(e.target.value);
        }}/>
        <input type="password" placeholder="Password" onChange={(e) => {
          setpassword(e.target.value);
        }} />

        <div className="login-btn" >   
            LOGIN
        </div>

         <p className="text">OR LOGIN USING</p>

         <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
        </div>
        <h1>{loginStatus}</h1>
    </div>
    </div>
  )

}


export default App;