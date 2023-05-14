// CSS file 
import './Home.css';

// Other imports 
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Images 
import selfie from '../Images/selfie.jpg';

function Home() {
  return (
    <div className='AAA'>
      <div className='biography'>
        Greetings —
        <br/>
        <br/>
        My name is Ryan and I am currently majoring in Computer Science!
        My hope for this website is to share about the various passion projects that I have created over the course of my life. 
        <br/>
        <br/> 
        Fun fact, I programmed this website using ReactJS!
      </div>
      <img className='selfie' src={selfie}></img>
    </div>
  );
}

export default Home;