import React from 'react';
import logo from './logo.svg';
import './App.css';
import present from './present.jpg'
import styles from './styles/page2.css'



function Self(){
    return(
        <div class='self-container'>
            <h1 class='who-am-i'>Who am i?</h1>
        </div>
        
    )
}
function PersonalCard(){
    return(
        <div class='personal-card-container' width='100px'>
            <div class='present-img-container'>
                <img src={present} class='present-img'></img>
            </div>
            <div class='present-text'>
                <h1>Hi!✋ My name is Diego Estrada!</h1>
                <p>I'm currently studying Computer Science at Universidad del Valle
                    de Guatemala. I love cars 🚗, videogames 🎮, RnB music 🎧 and
                    CSS tricks. I enjoy learning and also sharing my creations to the whole world.
                    <br/>
                    <br/>
                    I'd love it if you reached out to me. Even if it's just to say "Hi!"<br/>
                    Who knows, maybe we could just chat about movies and TV Shows, or it could be you 
                    sharing design ideas for me to develop.
                </p>
            </div>
        </div>
    )
}

function Page2(){
    return(
    <div class='page2'>
      <Self/>
      <PersonalCard/>
      <div id="container">
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
            </button>
      </div>
    </div>
    )
}
export default Page2;