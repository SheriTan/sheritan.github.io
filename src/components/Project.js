import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Project({ projects }) {
    const projID = new URL(document.location).searchParams.get('projID');
    const [project, setProject] = useState({});
    
    useEffect(() => {
        projects.forEach((proj)=>{
            if (proj.id == projID){
                setProject(proj);
            }
        })
    }, [projects, project])

    return (
        <>
            <div className='card_subheading'>
                <Link to={'/projects'}>
                    <div className='goBack'/>
                </Link>
                <span>{project.projectName}</span>
            </div>
            <div className='contents project'>
                <span>{project.description}</span>
                <video className='showcaseVid' src={project.video} controls />
            </div>
        </>
    );
}