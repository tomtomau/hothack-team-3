import logo from '../qr-code.png';
import './Artist_main.css';
import ChatBox from './chat';
import Header from '../other_components/header'
import Footer from '../other_components/footer'
import axios from "axios";
import React from "react";

const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/artists/1";



function App() {
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


  if (!post) return (
    <div><p>LOADING ...</p></div>
  )
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div>
        <img src={post.ArtistLogoURL} className="Avatar" alt={post.ArtistName} />
      </div>
      <div className="qr_code">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="chat_box">
        <ChatBox />
      </div>
      <div>
        <a href="/artist/report" className="report_link"><button>Report</button></a>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>

  )
}

export default App;
