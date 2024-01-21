import axios from "axios";
import React from "react";

export default function PosPostCounter(artist) {

    ///local storage 
    //
    const visited = localStorage.getItem("visited");

    if (!visited){

 
    // Create the post request with Axios
    const signupURL = "https://crowdclix_workers.tom-newby-au.workers.dev/pageviews/"
    const artistID = artist.Artist.ArtistID
 
    // Create the post request with Axios - need to get artist id from fans.js
    axios
        .post(`${signupURL + artistID}`, {})
        .then((response) => {
            console.log(response.data);
        });
    
    localStorage.setItem("visited", true);    }

    return (
        <div></div>
    );
}

