import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles/page1.css'

function Name(){
  return(
    <div className='intro' style={styles.intro}>
      <div className='myname'>My name is</div>
      <div class='content' style={styles.content}>
        <svg viewBox="0 0 600 170" style={styles.svg}>
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em" style={styles.text}>
              Diego
            </text> 
          </symbol>
          <use xlinkHref='#s-text' class='text' />
          <use xlinkHref='#s-text' class='text' />
          <use xlinkHref='#s-text' class='text' />
          <use xlinkHref='#s-text' class='text' />
          <use xlinkHref='#s-text' class='text' />
        </svg>
      </div>
      <div className='description'>And Im a frontend developer</div>
    </div>
  )
}
function Social(){
  return(
    <div class="sleek__social">
      <a href="https://github.com/diegoestradaXO" target='_blank' class="btn github">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/diegxestrada" target='_blank' class="btn instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/diego-estrada-79340b157/" target='_blank' class="btn linkedin">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  )
}
function NavBar(){
  return(
      <nav class='container' style={styles.container}>
        <div class='logo' style={styles.logo}>
          <h4>Portfolio</h4>
        </div>
      </nav>
  )
}

function Page1(){
    return(
    <div class='page1'>
      <NavBar/>
      <Name/>
      <Social/>
      <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href='#finish'></a>
    </div>
    )
}
export default Page1;