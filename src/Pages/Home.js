import './Home.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Home() {
  return (
    <div className='home-page'>
      <div className='biography'>
        Hello!
        <br/>
        <br/>
        My name is Ryan and I am currently majoring in Computer Science.
        My hope for this website is to share about the various passion projects that I have created over the course of my life. 
        <br/>
        <br/> 
        Fun fact, I programmed this website using ReactJS!
      </div>
    </div>
  );
}

export default Home;