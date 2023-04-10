import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import UserAPI from '../apis/UserAPI.js';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Profile = () => {

    // initial state is empty
    const[user, setUser] = useState([]);

    // UseEffect -> mount the user
    useEffect(() => {
        console.log("User mounted");
        UserAPI.getUserById(setUser);
    }, []);


    return (
        <Container>
            {user.map((u) => {
                return <h1 key={u.id}>{u.name}</h1>
            } )}
        </Container>
        
    );
}

export default Profile;