import React from 'react';
import '../App.css'
import {Button} from './Buttun'
import './HeroSection.css'
function HeroSection(){
return(
    <div className="hero-container">
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1> TV SHOW </h1>
        <p>What are you wating for!</p>
        <div className="hero-btns">
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET Started
            </Button>

            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
               Watch Trailer <i className=' far fa-play-circle'/>
            </Button>
        </div>
    </div>
)
}

export default HeroSection