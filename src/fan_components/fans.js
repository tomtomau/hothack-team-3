import axios from "axios";
import React from "react";

// import data from "../artist_components/artist.json"
import './fans.css';
import Header from "../other_components/header.js";
import Footer from "../other_components/footer.js";



const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/artist";

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
        <Header/>

            <div id="fans-main">
                <div id="artist-info">
                    <div id="artist-image">
                        <img src={post[0].ArtistLogoURL}  alt={post[0].ArtistName} />
                    </div>
                    <div id="bio">
                        <p>{post[0].ArtistDescription}</p>
                    </div>
                </div>
                <div id="sendMsg">
                    <p>Send {post[0].ArtistName} a live message!:</p>
                    <form> 
                        <input type="text" id="message" name="message"/> 
                        <input type="submit" value="Send"/>
                    </form>
                </div>

                <div id="signup">
                    <p>Sign up for the {post[0].ArtistName} newsletter!:</p>
                    <form>
                        <input type="email" placeholder="enter your email address" id="email" name="email"/>
                        <input type="submit" value="Sign me up!"/>
                    </form>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Fans