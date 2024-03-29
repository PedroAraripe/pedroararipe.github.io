import React, { useState } from 'react';
import styled from 'styled-components';

import { TitleSection } from '../styles'; 
import themesColors from '../../../common/constants/themesColors';
import getRandomOnArray from '../../../common/utils/getRandomOnArray';

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
    const techs = [
        'Javascript',
        'Node',
        'Vue.js',
        'React.js',
        'SQL',
        'Typescript',
        'Express',
        'Nuxt',
        'Next',
        'Shell',
    ]

    return (
            <SectionWrapper themeColor={themeColor} className='mt-5 row'>
                <div className="col-12 ">
                    <TitleSection themeColor={themeColor} onClick={() => setThemeColor(getRandomOnArray(themesColors))}>about</TitleSection>
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
                        {techs.map((tech, index) => <li key={index}>{tech}</li>)}
                    </TechList>
                </main>
            </SectionWrapper>
    );
  }
  
  export default AboutSection;
  
