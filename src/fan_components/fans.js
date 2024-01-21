import axios from "axios";
import React from "react";

// import data from "../artist_components/artist.json"
import './fans.css';
import Header from "../other_components/header.js";
import Footer from "../other_components/footer.js";
import Signup from "./signup.js";
import PostMsg from "./postmsg.js";
import PostCounter from "./PostCounter.js";

const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/artists/1";




function Fans() {

    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);
    
    if (error) return `Error: ${error.message}`;
    if (!post) return null;

    return (
        
        <div id="fans-body">
        <Header ArtistName = {post.ArtistName}/>

            <div id="fans-main">
                <div id="artist-info">
                    <div id="artist-image">
                        <img src={post.ArtistLogoURL}  alt={post.ArtistName} />
                    </div>
                    <div id="bio">
                        <p>{post.ArtistDescription}</p>
                    </div>
                </div>
            <PostMsg Artist = {post}/>
            <Signup Artist = {post}/>
            </div>
        <Footer/>
        <PostCounter Artist = {post}/>
        </div>

    )
}

export default Fans