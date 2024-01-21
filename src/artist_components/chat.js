import axios from "axios";
import React from "react";


const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/messages/1";
function Chat_box(){
  
  const [post, setPost] = React.useState(null);

  
  React.useEffect(() => {
      const fetchData = () => {
          axios.get(baseURL).then((response) => {
              
              setPost(response.data);
              const chatbox_element = document.querySelector('.chat_box')
              setTimeout( () => {
                chatbox_element.scrollTop = chatbox_element.scrollHeight
              }, 1000)
              
          });
      };

      
      fetchData();

      const intervalID = setInterval(fetchData, 3000);

      return () => clearInterval(intervalID);
  }, []);

  if (!post) return (
      <div><p>LOADING ...</p></div>
  );

  return (
        <div>
        <h1>LIVE CHAT</h1> 
        <ul>{post.map((post) => (
            <li>{post.MessageContents}</li>
        ))}</ul>
      </div>
  );
}

export default Chat_box

// function PageViews() {
//   // State variable 'post' and function 'setPost' for managing the post data
//   const [post, setPost] = React.useState(null);

//   // React useEffect hook, which runs after the initial render
//   React.useEffect(() => {
//       const fetchData = () => {
//           axios.get(baseURL).then((response) => {
//               // Updating the 'post' state with the data received from the API
//               setPost(response.data);
//           });
//       };

//       // Fetch data initially
//       fetchData();

//       const intervalID = setInterval(fetchData, 3000);

//       return () => clearInterval(intervalID);
//   }, []);

//   if (!post) return (
//       <div><p>LOADING ...</p></div>
//   );

//   return (
      //   <div>
      //   <h1>LIVE CHAT</h1> 
      //   <ul>{post.map((post) => (
      //       <li>{post.MessageContents}</li>
      //   ))}</ul>
      // </div>
//   );
// }

// export default PageViews
