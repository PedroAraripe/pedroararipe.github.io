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
            <section className='mt-5 row'>
                <div className="col-12 ">
                    <TitleSection className='mb-4'>about</TitleSection>
                </div>
                <main className="col-md-8">
                    <p>
                        I am currently studying Analysis and System Development at Estácio de Sá, with a focus in Web Development. In the same month that i started my college degree, i'd the lucky to get an internship to work with Vue.js.
                    </p>
                    <p>
                        The Front-End development is where i feel 100% comfortable, but i'm really into any way of the development that i can use my creativity and problem solving skills. 
                    </p>
                    <span>
                        Here are some technologies I have been working with:
                    </span>

                    <TechList>
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
                <aside className="offset-1 col-md-3">
                    {/* TODO */}
                    Colocar aqui um bonequinho que fica olhando e piscando quadrado avermelhado 
                </aside>
            </section>
    );
  }
  
  export default HeroSection;
  
