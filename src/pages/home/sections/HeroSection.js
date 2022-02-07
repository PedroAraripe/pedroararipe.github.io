import React from 'react';
import styled from 'styled-components';
import Dude from '../../../common/components/Dude';

function HeroSection() {
    return (
        <Wrapper>
            <div className="h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <section className="d-flex flex-column align-items-center d-md-block text-center text-md-start">
                    <div className="pb-4">
                    {/* TODO */}
                    {/* Colocar aqui um bonequinho que fica olhando e piscando quadrado avermelhado  */}
                    {/* De tempos em tempos é adicionado um novo bonequinho que vem deslizando 
                    para o lado do ultimo bonequinho */}
                        <Dude />
                    </div>
                    <div>
                        <MainTitle className='mb-2'>hi, <span className='text-tomato'> araripe </span> here.</MainTitle>
                        <h2 className="text-tomato">I build stuff sometimes.</h2>
                    </div>
                    <HeroTextContainer className="pt-4 pb-4 pb-md-5">I'm a front-end developer based in Brazil and i love learning everything that helps me express my creativity.</HeroTextContainer>
                </section>
                <div>
                    <a
                        href="mailto:pedro.lucx@gmail.com"
                        className="btn btn-tomato text-tomato px-5 py-3">
                            Say hello
                    </a>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
`

const MainTitle = styled.h1`
    font-size: 2rem;

    @media (min-width: 768px){
        font-size: 4rem;
    }
`

const HeroTextContainer = styled.p`
    max-width: 500px;
`

export default HeroSection;
  
