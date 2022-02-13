import React, { useState } from 'react';

import styled from 'styled-components'
import { TitleSection } from '../styles'; 
import Dude from '../../../common/components/Dude'
import themesColors from '../../../common/themesColors';

const SectionWrapper = styled.section`
    line-height: 1.5rem;

    & strong {
        color: ${props => props.themeColor ?? 'white'}
    }
`

const TechList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.5rem 0 3rem 15px;
    
    display: grid;
    grid-template-columns: repeat(2,minmax(150px,10px));
    
    > * {
        position: relative;
        padding-left: 4px;
        
        :before {
            content: "▹ ";
            position: absolute;
            left: -15px;
            color: ${props => props.themeColor ?? 'white'};
        }
    }
`

function AboutSection() {
    let [themeColor, setThemeColor] = useState([themesColors[1]]);

    return (
            <SectionWrapper themeColor={themeColor} className='mt-5 row'>
                <div className="col-12 ">
                    <TitleSection themeColor={themeColor}>about</TitleSection>
                </div>
                <main className="col-md-8">
                    <p>
                        I am currently studying <strong>Analysis and System Development</strong> at <strong>Estácio de Sá</strong>
                        , with a focus in <strong>Web Development</strong>. In the same month that i started my college degree
                        , i'd the lucky to get an internship and get experience with <strong>Javascript</strong> early.
                    </p>
                    <p>
                        The Front-End development is where i feel 100% comfortable
                        , but i'm really into any way of development that i can use my <strong>creativity</strong> and <strong>problem solving skills</strong>. 
                    </p>
                    <span>
                        Here are some technologies I have been working with:
                    </span>

                    <TechList themeColor={themeColor}>
                        <li>Vue.js</li>
                        <li>Nuxt</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Next</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>TailwindCss</li>
                        <li>Sass</li>
                        <li>PostCss</li>
                    </TechList>
                </main>
                <aside className="offset-md-1 col-md-3 d-flex justify-content-center justify-content-md-end align-items-md-end">
                    <Dude themeColor={themeColor} setThemeColor={setThemeColor} />
                </aside>
            </SectionWrapper>
    );
  }
  
  export default AboutSection;
  
