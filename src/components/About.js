import React, { useEffect, useRef, useState } from 'react';
const About = ({ title }) => {
    return (
        <>
            <span className='card_heading'>{title}</span>
            <div className='contents about'>
                <span>My passion lies in developing software-based solutions that cater to the needs of consumers.</span>
                <span>I possess experience in both front-end and back-end development, and I have previously interned as a software developer at the Lee Kong Chian School of Medicine in 2022.</span>
                <span>I hold a diploma in Information Technology from Singapore Polytechnic.</span>
                <span>I am currently seeking a full-time position as a software engineer.</span>
            </div>
        </>
    );
}

export default About;