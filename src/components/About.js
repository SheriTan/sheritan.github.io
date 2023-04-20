import React, { useState } from 'react';
const About = ({ title }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.PUBLIC_URL}/Resume.pdf`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        setLoading(false);
    }

    return (
        <>
            <span className='card_heading'>{title}</span>
            <div className='contents about'>
                <span>My passion lies in developing software-based solutions that cater to the needs of consumers.</span>
                <span>I possess experience in both front-end and back-end development, and I have previously interned as a software developer at the Lee Kong Chian School of Medicine in 2022.</span>
                <span>I hold a diploma in Information Technology from Singapore Polytechnic.</span>
                <span>I am currently seeking a full-time position as a software engineer.</span>
            </div>
            <div>
                <button className='download_btn' disabled={loading} onClick={handleClick}>
                    <img src='/download.png' />
                    <span>{loading ? 'Downloading...' : 'Download Resume'}</span>
                </button>
            </div>
        </>
    );
}

export default About;