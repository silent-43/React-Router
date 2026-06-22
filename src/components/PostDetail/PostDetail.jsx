import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h2>Title : {post.title}</h2>
            <p><strong>Body : </strong>{post.body}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;