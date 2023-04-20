import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ title, contents }) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(contents.projects.reverse())
    }, [contents]);

    return (
        <>
            <span className='card_heading'>{contents.subHeading} {title}</span>
            <div className='thumbnail_display'>
               {
                projects.map((project, index) => (
                    <Link to={'/project?projID='+project.id} key={index}>
                        <div className='projContainer'>
                            <img src={project.thumbnail} alt={project.projectName}/>
                        </div>
                    </Link>
                ))
            } 
            </div>
        </>
    );
}

export default Projects;