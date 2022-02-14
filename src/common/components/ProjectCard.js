import React from 'react';
import styled from 'styled-components';

// TODO
// talvez fazer com que 

const WrapperProject = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    padding: 1.5rem;

    border: 1px solid ${props => props.themeColor ?? 'blue'};
    box-shadow: 0 0 5px ${props => props.themeColor ?? 'blue'};
    border-radius: 15px;

    @media (min-width: 768px) {
        :hover {
            transition: all 0.3s;
            transform: translateY(-1rem);

            .project-title{
                transition: all 0.3s;
                color: ${props => props.themeColor ?? 'blue'};
            }
        }
    }
    
    & a {
        text-decoration: none;
        color: inherit;
    }

    & .fa-file-code {
        font-size: 30px;
        filter: brightness(85%);
        color: ${props => props.themeColor ?? 'blue'};
    }

    & .project-title {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.1rem;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
    }

    & .project-description {
        margin-bottom: 2rem;
    }

    & .project-description, & .project-tags {
        font-weight: lighter;
    }

    .project-description {
        color: whitesmoke;
        font-size: 0.8rem;
    }

    .project-tags {
        color: #a6a6a6;
        font-size: 0.7rem;
    }

    ${'' /* & .project-tags {
        align-items: end;
        display: flex;
    } */}
` 

export default function ProjectCard({className, project, themeColor}){
    
    // here one project isnt going to nowhere on click... no idea why
    return(
        <WrapperProject className={className} themeColor={themeColor}>
            <i className="fa-regular fa-file-code"></i>
            
            <a 
                className='project-title'
                href={project.homepage?.length ? project.homepage : project.html_url}
                target="_blank"
                rel="noreferrer"
            >
                {project.name}
            </a>

            <div className='project-description'>
                {project.description}
            </div>

            <div className="project-tags d-flex flex-column justify-content-between flex-grow-1">
                {project?.topics.length > 0 && 
                    <div className="project-tag d-flex flex-grow-1 align-items-end">
                        {project.topics.join(', ')}
                    </div>
                }
            </div>
        </WrapperProject>
    )
}