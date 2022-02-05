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

function ExperienceSection() {
    return (
            <section className='mt-5 row'>
                
            </section>
    );
  }
  
  export default ExperienceSection;
  
