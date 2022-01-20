import React from 'react'
import Image from 'next/image'

const Project = (props) => {
    const projects = props.projects ? props.projects : []

    return (
        <div id='projects'>
            <h1 className="title">Latest Projects</h1>
            <ul className="projects">
            {projects.map(project => {
                return (
                    <li className="project" key={project.id}>
                        <div className="container">
                            <div className="project-image">
                                <Image src={'http://res.cloudinary.com/kirantiloh-bucket/' + project.image} alt={project.title}  width="500px" height="300px" layout="responsive" objectFit="contain"/>
                            </div>
                            <h1 className="project-title">{project.title}</h1>
                            <p className="desc">{project.desc}</p>
                            <p className="desc">Completion Date : {project.date_created}</p>
                            <a href={project.url} target='_blank' rel='noreferrer' className="visit-site-btn">Visit Site</a>
                            {
                                project.link_backend ? (
                                    <div>
                                    <a href={project.link_frontend} target='_blank' rel='noreferrer' className='secondary-btn'>Source (Frontend)</a>
                                    <a href={project.link_backend} target='_blank' rel='noreferrer' className='secondary-btn'>Source (Backend)</a>
                                    </div>
                                ) : (
                                    <a href={project.link_frontend} target='_blank' rel='noreferrer' className='secondary-btn'>Source</a>
                                )
                            }
                        </div>
                    </li>
                )
            })}
            
            </ul>
        </div>
    )
}

export default Project

