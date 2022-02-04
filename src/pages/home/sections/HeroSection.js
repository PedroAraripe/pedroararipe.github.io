import React from 'react';

import styled from 'styled-components'

const TopMargin = styled.div`
    margin-top:5%;
    
    @media (min-width: 768px){
        margin-top:15%;
    }
`

function HeroSection() {
    return (
        <TopMargin>
            <div class="h-100 d-flex flex-column align-items-between">
                <section class="flex-grow-1">
                    <div class="position-relative d-flex pb-5">
                        <div class="loader loader-cwise"></div>
                    </div>
                    <div>
                        <h1>hi, <span> lucas </span> here.</h1>
                        <h2 class="text-muted">I create stuff sometimes.</h2>
                    </div>
                    <div class="py-4">I'm a software engineer and artist based in Toronto. I have profound interest in full-stack development, machine learning, human-computer interactions, and everything in between.</div>
                </section>
                <div class="pb-5">
                    <button class="border border-danger btn px-5 py-3 text-danger">Say hello</button>
                </div>
            </div>
        </TopMargin>
    );
  }
  
  export default HeroSection;
  
