import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id='aboutMe' className='about-section'>
        <div className='about-section-img'>
            <img src='../images/me.jpg' alt='image' />
        </div>
        <div className='about-section-content-box about-section-box'>
            <div className='about-section-content'>
                {/* <p className='section-title'>About</p> */}
                <h1 className='about-section-heading'>About Me</h1>
                <p className='about-section-description'>I am a Frontend Developer who also has strong backend and game devoloping skills. I improve the workflow of my teams with my strong technical and leadership skills, and I am able to keep cool under pressure.<br/>My goal is to expand my knowledge and understanding of software engineering by learning more skills to add to my arsenal of technical skills, as well as helping others improve and making a positive impact on the world.</p>
            </div>
        </div>
    </section>
  );
};

export default AboutMe
