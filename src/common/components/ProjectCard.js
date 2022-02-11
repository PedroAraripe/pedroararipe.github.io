import React from 'react';
import styled from 'styled-components';

const WrapperProject = styled.div`
    &:hover {
        & .project-hover {
            opacity: 1;
        }

        
        & .arrow-body {
            max-width:100px !important;
        }

        & .fa-chevron-down {
            opacity: 0 !important;
        }
    }

    position: relative;

    height: 100%;
    width: 100%;
    min-width: 200px;
    min-height: 300px;

    display: flex;
    flex-direction: column;

    padding: 2rem;

    background-color: ${props => props.themeColor ?? 'blue'};
    border-radius:15px;

    
    & a {
        text-decoration: none;
        color: inherit;
    }

    & .fa-file-code {
        font-size: 30px;
        filter: brightness(85%);
        color: white;
    }

    & .project-title {
        text-transform: capitalize;
        font-weight: bold;
        margin: 1rem 0;
        font-size: 1.2rem;
    }

    & .project-description {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    & .project-description, & .project-tags {
        color: whitesmoke;
        font-weight: lighter;
        font-size: 0.9rem;
    }

    ${'' /* & .project-tags {
        align-items: end;
        display: flex;
    } */}
` 

const ProjectHover = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;

    padding: 2rem;

    border-radius: 15px;

    &:hover {
        transition: transform 1s;
        transform: scale(1.1);

        @media (min-width: 576px) {
            transform: scale(1.3);
        }
    }

    ${'' /* transition: opacity 0.2s; */}

    opacity: 0;

    width: 100%;
    height: 100%;
    
    background: #f9a2d5;
    color: black;

    & h3 {
        text-transform: uppercase;
        font-weight: bold;
        word-break: break-word;
    }

    & p {
        display: flex;
        align-items:center;

        flex-grow: 1;
    }


    & .arrow {
        display:flex;
        position: relative;
        min-height: 46px;
        
        padding: 0.5rem;
        
        overflow: hidden;

        & .fa-chevron-down {
            position: relative;
            right: 0.6rem;
            top: -5px;
            right: 5px;

            transform: rotate(-90deg);
            transition: all 1.5s;
            
        }

        & .arrow-body {
            height: 100%;
            width: 100px;
            max-width:10px;

            transition: all 2s;

            border-top: 2px solid black;
            margin-top: 0.46rem;
        }
    }
    

`

export default function ProjectCard({className, project, themeColor}){
    console.log(project.topics)
    
    // here one project isnt going to nowhere on click... no idea why
    return(
        <WrapperProject className={className} themeColor={themeColor}>
            <ProjectHover className="project-hover">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a 
                    href={project.homepage ?? project.clone_url}
                    target="_blank"
                    rel="noreferrer"
                    className="arrow"
                >
                    <div className="arrow-body" />
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
            </ProjectHover>
            <i className="fa-regular fa-file-code"></i>

            <div className="d-flex flex-column justify-content-between flex-grow-1">
                <div className='project-title'>
                    {project.name}
                </div>
                {project?.topics.length > 0 && 
                    <div className="project-tags">
                        * {project.topics.join(', ')}
                    </div>
                }
            </div>
        </WrapperProject>
    )
}