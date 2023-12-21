import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contactMe' className='contact-section'>
        <div>
            {/* <p className='sub-title'>Get In Touch</p> */}
            <h2 className='contact-h2'>Contact Me</h2>
            <p className='text-lg'>If you want to work on a project, collaborate, or simply say hi, send me an email. Let's talk!</p>
        </div>
        <form className='contact-form-container'>
            {/* first name label */}
            <label htmlFor='first-name' className='contact-label'>
                <span className='text-md'>First Name*</span>
                <input type='text' className='contact-input text-md' name='first-name' id='first-name' required />
            </label>
            {/* last name label */}
            <label htmlFor='last-name' className='contact-label'>
                <span className='text-md'>Last Name*</span>
                <input type='text' className='contact-input text-md' name='last-name' id='last-name' required />
            </label>
            {/* email label */}
            <label htmlFor='email' className='contact-label'>
                <span className='text-md'>Email*</span>
                <input type='text' className='contact-input text-md' name='email' id='email' required />
            </label>
            {/* phone number label */}
            <label htmlFor='phone-number' className='contact-label'>
                <span className='text-md'>Phone Number</span>
                <input type='number' className='contact-input text-md' name='phone-number' id='phone-number' />
            </label>
            {/* choose topic */}
            <label htmlFor='choose-topic' className='contact-label'>
                <span className='text-md'>Choose a topic</span>
                <select id='choose-topic' className='contact-input text-md'>
                    <option>Web development</option>
                    <option>Game development</option>
                    <option>Other</option>
                </select>
            </label>
            {/* message */}
            <label htmlFor='message' className='contact-label'>
                <span className='text-md'>Message*</span>
                <textarea className='contact-input text-md' id='message' rows='8' placeholder='Type your message...' />
            </label>
            {/* checkbox for accepting terms */}
            <label htmlFor='checkbox' className='checkbox-label'>
                <input type='checkbox' required name='checkbox' id='checkbox' />
                <span className='text-sm'>I accept the terms</span>
            </label>
            <div>
                <button className='btn btn-primary contact-form-btn'>Submit</button>
            </div>
        </form>
    </section>
  );
};

export default Contact
