import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    console.log('userdetails2', name, username)

    return (
        <div>
            <p><small>Username : {username}</small></p>
            <p>Name : {name}</p>
        </div>
    );
};

export default UserDetails2;