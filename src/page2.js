import React from 'react';
import logo from './logo.svg';
import './App.css';
import present from './present.jpg'
import styles from './styles/page2.css'
import buttonStyle from './styles/button.css'


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
                    CSS tricks. I enjoy learning and also sharing my creations to the world <a href='https://codepen.io/diegoestradaXO' target='_blank' className ='visit'>(go to my Codepen)</a>
                    <br/>
                    <br/>
                    I'd love it if you reached out to me. Even if it's just to say "Hi!"<br/>
                    Who knows, maybe we could just chat about movies and TV Shows, or it could be you 
                    sharing design ideas for me to develop.
                </p>
                <div class="center">
                    <a href="diego_estrada_cv.pdf" download="hire_this_guy"> 
                    <button class="button" type="submit" style={buttonStyle}>Get my CV!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Page2(){
    return(
    <div class='page2'>
      <Self/>
      <PersonalCard/>
      <div id='finish'></div>
    </div>
    )
}
export default Page2;