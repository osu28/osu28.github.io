import React from "react";
// import ReactAudioPlayer from 'react-audio-player';
// import astrothunder from '../assets/astrothunder.mp3';

export const Intro = () => {
    var github = <a
                    className="App-link"
                    href="https://github.com/osu28"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/github_icon.png")} className='github' alt="@osu28"></img>
                </a>
    var linkedin = <a
                    className="App-link"
                    href="https://www.linkedin.com/in/oscarsu28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/linkedin_icon.png")} className='linkedin' alt="@oscarsu28"></img>
                </a>
    var gmail = <a
                    className="App-link"
                    href="mailto:oscarsu0428@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/gmail_icon.png")} className='gmail' alt="oscarsu0428@gmail.com"></img>
                </a>
    // function changeBackgroundImage() {
    //     document.body.style.backgroundImage = "../assets/triangle_paggern.jpg";
    //     console.log("changed");
    //   }
    return (
        <div className="intro">
            <div className="column_intro_left">
                <h1>Hi, I'm Oscar Su</h1>
                <p>A young software engineer looking to build something cool.</p>
                <p>I have a strong record of implementing technical solutions to complex problems.</p>
                {github}{linkedin}{gmail}
                <br></br>
                <br></br>
                {/* <p> My fav song:</p>
                <ReactAudioPlayer 
                    src={astrothunder} controls 
                    onListen={changeBackgroundImage()}/> */}
                
            </div>
            <div className="column_intro_right">
                <img src={require("../assets/headshot.png")} className='headshot' alt="me :)"></img>
            </div>
        </div>
    );
  };