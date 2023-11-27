import './login.css'
import React, { useState, useEffect } from 'react'
import { loginAPI } from '../../services/UserServices';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleLogin = async () =>{
        alert("me")
        if (!email || !password){

        }

        let res = await loginAPI(email, password);
        if (res && res.token){
            localStorage.setItem("token", res.token)
        }
        console.log(">>>check login")
    }
    return (
        <>
            <div className="login-container col-4">
                <div className="title">Log in</div>
                <div className="text">Email</div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className='input-2'>
                    <input
                        type= {isShowPassword === true ? "text" : "password"}
                        placeholder="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <i className={isShowPassword === true ? 'fa-solid fa-eye' :'fa-solid fa-eye-slash'}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    
                    ></i>

                </div>


                <button 
                    className={email && password ? "active": ""}
                    disabled={email && password ? false : true}
                    onClick={() => handleLogin()}
                >Login</button>
                <div className='back'>
                    <i className='fa-solid fa-angles-left'></i>Go back
                </div>

            </div>
        </>
    )
}

export default Login