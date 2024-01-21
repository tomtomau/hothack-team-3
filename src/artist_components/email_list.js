import axios from "axios";
import React from "react";

const baseURL = "https://crowdclix_workers.tom-newby-au.workers.dev/signup/1";

function EmailList() {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, [])


    if (!post) return null;
    return (
        <div>
            <h1>Email Sign Ups</h1>
            <ul>{post.map((post) => (
                <li>{post.FanEmail}</li>
            ))}</ul>
        </div>

    )
}

export default EmailList