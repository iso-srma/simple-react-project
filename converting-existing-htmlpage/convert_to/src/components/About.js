import React from 'react';
import profileImage from '../assets/1.jpg';
import './About.css'

function About() {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
      <img src={profileImage} alt="Ishwor Sharma" className="profile-img" />
        <p>
            Hello! I'm a passionate web developer with experience in building simple and beautiful websites. I love learning new technologies and creating projects that solve real-world problems.
        </p>
    </section>
    </div>
  )
}

export default About
