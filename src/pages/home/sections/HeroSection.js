import React from 'react';

import styled from 'styled-components'

const TopMargin = styled.div`
    height: 100vh;
    padding-top: 20px;
    
    @media (min-width: 768px){
        padding-top:10%;
    }
`

function HeroSection() {
    return (
        <TopMargin>
            <div className="h-100 d-flex flex-column align-items-between">
                <section className="flex-grow-1">
                    <div className="pb-4 pb-md-5">
                    {/* TODO */}
                    {/* Colocar aqui um bonequinho que fica olhando e piscando quadrado avermelhado  */}
                    {/* De tempos em tempos é adicionado um novo bonequinho que vem deslizando 
                    para o lado do ultimo bonequinho */}
                        <div className="loader loader-cwise"></div>
                    </div>
                    <div>
                        <h1>hi, <span> lucas </span> here.</h1>
                        <h2 className="text-muted">I create stuff sometimes.</h2>
                    </div>
                    <div className="py-4">I'm a software engineer and artist based in Toronto. I have profound interest in full-stack development, machine learning, human-computer interactions, and everything in between.</div>
                </section>
                <div className="pb-3 pb-md-5">
                    <button className="border border-danger btn px-5 py-3 text-danger">Say hello</button>
                </div>
            </div>
        </TopMargin>
    );
  }
  
  export default HeroSection;
  
