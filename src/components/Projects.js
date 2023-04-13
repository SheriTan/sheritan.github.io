import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Poly from './works/Poly';

const Projects = ({ title, pages }) => {
    const [subHeading, setSubHeading] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        pages.forEach((page) => {
            if (page.url === 'projects') {
                page.subsection.forEach((category) => {
                    if (category.active) {
                        if (category.section === 'Polytechnic') {
                            setProjects(Poly);
                        }
                        setSubHeading(category.section);
                    }
                });
            }
        });
    }, [pages]);

    return (
        <>
            <span className='card_heading'>{subHeading} {title}</span>
            <div className='thumbnail_display'>
               {
                projects.reverse().map((project, index) => (
                    <Link to={'/projects/?projID='+project.id} key={index}>
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