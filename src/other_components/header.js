import axios from "axios";
import React from "react";


const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/artist";

export default function Header() {

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
      <header>
            <h1 id="artistName">{post[0].ArtistName}</h1>
      </header>
    );
  }

  