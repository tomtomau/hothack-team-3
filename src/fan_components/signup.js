import { useState } from 'react';
import axios from "axios";
import React from "react";

export default function SignUp() {
    // hold the value for the email address
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Record the changes to email address made to input box
    function handleEmailChange(e) {
        setEmail(e.target.value);
        }
    
       
    // Create the post request with Axios
    const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/signups"
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
        });
    }, []);

    // handle email submission
    async function handleSubmit(e) {
    e.preventDefault();

        axios
        .post(baseURL, {email: email})
        .then((response) => {
            setPost(response.data);
        });
    }

    if (submitted === 'success') {
        return <p>Thanks for signing up!</p>
        }
    // try{
    //     const response = await fetch("https://crowdclix_workers.tom-newby-au.workers.dev/signups", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ "email": email }),
    //     });

    //   if (response.ok) {
    //     setSubmitted(true);
    //     // You can perform additional actions after a successful submission
    //   } else {
    //     // Handle non-successful response, e.g., display an error message
    //     console.error("Failed to submit email");
    //   }
    // } catch (error) {
    //   // Handle network errors or other issues
    //   console.error("Error:", error.message);
    // }

    
    
    return (
        <div id="signup">
        <p>Sign up for the newsletter!:</p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="enter your email address" id="email" name="email" value= { email } onChange={handleEmailChange}/>
            <button type="submit" disabled={email.length === 0}> Sign me up!</button>
        </form>
        </div>

    );
}

