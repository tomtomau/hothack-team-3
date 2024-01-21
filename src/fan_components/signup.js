import { useState } from 'react';
import './signup.css'
import axios from "axios";
import React from "react";

export default function SignUp(artist) {
    // hold the value for the email address
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Record the changes to email address made to input box
    function handleEmailChange(e) {
        setEmail(e.target.value);
        }
    
       
    // Create the post request with Axios
    const signupURL = "https://crowdclix_workers.tom-newby-au.workers.dev/signup/"
    const artistID = artist.Artist.ArtistID
    // const [post, setPost] = React.useState(null);

    // handle email submission
    async function handleSubmit(e) {
    e.preventDefault();

    // Create the post request with Axios - need to get artist id from fans.js
    axios
        .post(`${signupURL + artistID}`, {email: email})
        .then((response) => {
            console.log(response.data);
        });
    
    setSubmitted(true)
    }

    if (submitted === true) {
        return <p>Thanks for signing up!</p>
        }
    
    return (
        <div id="signup">
        <p>Sign up for the newsletter!</p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="enter your email address" id="email" name="email" value= { email } onChange={handleEmailChange}/>
            <div><button id="submit" type="submit" disabled={email.length === 0}> Sign me up!</button></div>
        </form>
        </div>

    );
}

