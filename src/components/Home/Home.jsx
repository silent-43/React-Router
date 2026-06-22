import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>This is home</h2>
            <button onClick={()=> navigate('/users')}>Go Back</button>
        </div>

    );
};

export default Home;