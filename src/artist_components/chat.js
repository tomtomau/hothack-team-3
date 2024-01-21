import axios from "axios";
import React from "react";


const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/messages/1";
function Chat_box(){
      // State variable 'post' and function 'setPost' for managing the post data
  const [post, setPost] = React.useState(null);

  // React useEffect hook, which runs after the initial render
  React.useEffect(() => {
    // Making an HTTP GET request to the specified API endpoint
    axios.get(baseURL).then((response) => {
      // Updating the 'post' state with the data received from the API
      setPost(response.data);
    });
  }, [])


  if (!post) return null;
  return (
    <div>
        <h1>LIVE CHAT</h1> 
        <ul>{post.map((post) => (
            <li>{post.MessageContents}</li>
        ))}</ul>
    </div>
    
    )
}

export default Chat_box
