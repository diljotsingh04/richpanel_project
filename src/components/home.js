import React from 'react'
import { database } from './authentication/firebaseAuth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const history = useNavigate();

  const handleClick = () =>{
    signOut(database).then(val => {
      history('/');
    });
  } 
  

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={handleClick}>SignOut</button>
    </div>
  )
}

export default Home;
