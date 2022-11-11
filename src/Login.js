import React, { useState,useCallback,useContext } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";


function Login() {

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then( auth => {
                //redirect to home page
                history.push("/")
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create a user, login and redirect to homepage
                history.push("/")
            })
            .catch(err => {
                alert(err.message)
            })
    }
    return (
        
        <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;