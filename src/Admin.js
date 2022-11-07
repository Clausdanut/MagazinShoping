import './Login.css';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";
import AdminSidebar from './AdminSidebar';
import './design.css';
import { db } from "./firebase";




function Admin() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth.user.displayName !== "admin"){
                    alert('nu esti admin');   
                        
                } else {
                    history.push('/admin-panou');
                };
            })
            .catch(error => alert(error.message))
    }



    return (
        <div className="login">
        <div className="home">
   </div>
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

                
            </div>
        </div>
    )
}

export default Admin;