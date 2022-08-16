import React from "react";

export const About = () => {
    return (
      <div className="about">
        <img src={require("../assets/purdue.webp")} className='purdue' alt="purdoo"></img>
        <div className="about_description">
          
          <h2>About Me </h2>
          <p>I am a junior at Purdue University studying <a href="https://www.cs.purdue.edu/undergraduate/curriculum/bachelor.html"><u>Computer Science</u></a> and <a href="https://www.cs.purdue.edu/undergraduate/curriculum/datascience-req-fall2020.html"><u>Data Science</u></a>. I have used my time in college so far to explore a wide array of fields including full stack web development, devops, and machine learning.</p>
          <p>Outside of class, I spend my time traveling, lifting weights, hooping with friends, teaching math & programming, and gaming the night away :)</p>
          <p>I am based in the D.C. Metropolitan Area, where I am excited to be a part of a growing tech hub. I am interested in internship opportunities related to software engineering for the summer of 2023, where I can put my problem solving skills to use!</p>
          <p>To see some of my experience, here’s my resume.</p>
        </div>
      </div>
    );
  };