
import axios from "axios";
import React from "react";

const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/pageviews/1";



function PageViews() {
    // State variable 'post' and function 'setPost' for managing the post data
    const [post, setPost] = React.useState(null);

    // React useEffect hook, which runs after the initial render
    React.useEffect(() => {
        const fetchData = () => {
            axios.get(baseURL).then((response) => {
                // Updating the 'post' state with the data received from the API
                setPost(response.data);
            });
        };

        // Fetch data initially
        fetchData();

        const intervalID = setInterval(fetchData, 3000);

        return () => clearInterval(intervalID);
    }, []);

    if (!post) return (
        <div><p>LOADING ...</p></div>
    );

    return (
            <div className='page_views'>
                <h2>Page Views</h2>
                <h2>{post.ArtistPageviews}</h2>
            </div>
    );
}

export default PageViews