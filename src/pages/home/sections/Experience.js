import React from 'react';

import styled from 'styled-components'
import { TitleSection } from '../styles'; 

const TechList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.5rem 0 3rem 15px;
    
    display: grid;
    grid-template-columns: repeat(2,minmax(150px,10px));
    
    > * {
        position: relative;
        
        :before {
            content: "▹ ";
            position: absolute;
            left: -15px;
            color: red;
        }
    }
`

function HeroSection() {
    return (
            <section className='mt-5'>
                <TitleSection className='mb-4'>about</TitleSection>
                <main className='row'>
                    <div className="col-md-8">
                        <p>
                            I am currently studying Computer Science at University of Toronto , with a focus in Software Systems and Artificial Intelligence. Last year, I was on a one year internship at Wattpad as a Software Engineer.
                        </p>
                        <p>
                            I'm into any sort of software development that requires creativity. My other areas of interest include machine learning, human-computer interactions and frontend development. I also like my fair share of visual arts and video editing. In my free time, I eat guava fruit and play video games.
                        </p>
                        <div>
                            Here are some technologies I have been working with:
                        </div>

                        <TechList>
                            <li>Vue</li>
                            <li>Nuxt</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Next</li>
                            <li>Node</li>
                            <li>Bootstrap</li>
                            <li>TailwindCss</li>
                            <li>Sass</li>
                            <li>PostCss</li>
                        </TechList>
                    </div>
                    <div className="offset-1 col-md-3">
                        {/* TODO */}
                        Colocar aqui um bonequinho que fica olhando e piscando quadrado avermelhado 
                    </div>
                    
                </main>
            </section>
    );
  }
  
  export default HeroSection;
  
