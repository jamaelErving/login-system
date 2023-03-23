// import React, {useState} from "react";
// import "./login.css";


//  const Login = () => {

//   const [popupStyle, showPopup] = useState("hide")

//   const popup = () => {
//     showPopup("login-popup")
//     setTimeout(() => showPopup("hide"), 3000)
//   }

//   return (
//     <div className="cover">
//         <h1 className="header">LOGIN</h1>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />

//         <div className="login-btn" onClick={popup} onChange={(e) => 
//         setUsername}>   
//             LOGIN
//         </div>

//          <p className="text">OR LOGIN USING</p>

//          <div className="alt-login">
//             <div className="facebook"></div>
//             <div className="google"></div>
//         </div>

//         <div className={popupStyle}>
//           <h3  >Login Failed</h3>
//           <p>username or password incorrect</p>

//         </div>
        

//     </div>
//   )
// }

// export default Login
