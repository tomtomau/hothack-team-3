import { useState } from 'react';
import axios from "axios";
import React from "react";
import './postmsg.css'

export default function PostMsg(artist) {
    // hold the value for the email address
    const [msg, setMsg] = useState('');
    // track user submission
    const [submitted, setSubmitted] = useState(false);

    // Record the changes to email address made to input box
    function handleMsgChange(e) {
        setMsg(e.target.value);
        }
    
       
    // Create the post request with Axios
    const signupURL = "https://crowdclix_workers.tom-newby-au.workers.dev/messages/"
    const artistID = artist.Artist.ArtistID
    // const [post, setPost] = React.useState(null);

    // handle email submission
    async function handleMsgSubmit(e) {
    e.preventDefault();

    // Create the post request with Axios - need to get artist id from fans.js
    axios
        .post(`${signupURL + artistID}`, {message: msg})
        .then((response) => {
            console.log(response.data);
        });
    
    setSubmitted(true)
    }

    if (submitted === true) {
        return <p>Message sent!</p>
        }
    
    return (
    <div id="sendMsg">
        <p>Send {artist.Artist.ArtistName} a live message!</p>
        <form onSubmit={handleMsgSubmit}> 
            <input type="text" placeholder="enter a message"id="message" name="message" value = { msg } onChange={handleMsgChange}/> 
            <div><input type="submit" id="send" value="Send"/></div>
        </form>
    </div>
    );
}

