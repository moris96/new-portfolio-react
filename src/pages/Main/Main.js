import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <section id='mainSection' className='main-section'>
        <div className='main-section-content-box'>
            <div className='main-section-content'>
                <p className='section-title'>Hi, I'm Moris Khoudari</p>
                <h1 className='main-section-title'>
                    <span className='main-section-title-color'>Frontend</span>{" "}
                    <br/>
                    Developer
                </h1>
                {/* <p className='main-section-description'>I am a Frontend Developer who also has strong backend and game devoloping skills. I improve the workflow of my teams with my strong technical and leadership skills, and I am able to keep cool under pressure.<br/>My goal is to expand my knowledge and understanding of software engineering by learning more skills to add to my arsenal of technical skills, as well as helping others improve and making a positive impact on the world.</p> */}
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='main-section-img'> 
            <img src='../images/me.jpg' alt='Main section' />
        </div>
    </section>
  );
};

export default Main
