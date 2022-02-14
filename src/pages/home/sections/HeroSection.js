import React, { useState } from 'react';
import styled from 'styled-components';

import Dude from '../../../common/components/Dude';
import themesColors from '../../../common/constants/themesColors';

function HeroSection() {
    let [themeColor, setThemeColor] = useState([themesColors[0]]);
    return (
        <Wrapper>
            <div className="h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <section className="d-fle w-100 flex-column align-items-center d-md-block text-center text-md-start">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-9">
                        {/* <div className="pb-4"> */}
                        {/* TODO */}
                        {/* Colocar aqui um bonequinho que fica olhando e piscando quadrado avermelhado  */}
                        {/* De tempos em tempos é adicionado um novo bonequinho que vem deslizando 
                        para o lado do ultimo bonequinho */}
                        {/* </div> */}
                        <div>
                            <MainTitle className='mb-2'>hi, <SpanTheme themeColor={themeColor}> araripe </SpanTheme> here.</MainTitle>
                            <SecondaryTitleTheme themeColor={themeColor}>I build stuff sometimes.</SecondaryTitleTheme>
                        </div>
                        <HeroTextContainer className="pt-4 pb-4 pb-md-5">I'm a front-end developer based in Brazil and i love learning everything that helps me express my creativity.</HeroTextContainer>
                            <AnchorTheme
                                themeColor={themeColor}
                                href="https://api.whatsapp.com/send?phone=5585997791248&text=Hi!%20nice%20portfolio,%20keep%20going!"
                                className="btn px-5 py-3">
                                    Say hello
                            </AnchorTheme>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <div className="mb-5 mb-md-0">
                            <Dude className="anxious-boy" themeColor={themeColor} setThemeColor={setThemeColor} />
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
`

const SpanTheme = styled.span`
    color: ${props => props.themeColor?? 'red'};
`

const SecondaryTitleTheme = styled.h2`
    color: ${props => props.themeColor?? 'red'};
`

const AnchorTheme = styled.a`
    font-weight: bold;

    border: 1px solid ${props => props.themeColor?? 'red'};
    color: ${props => props.themeColor?? 'red'};

    :hover {
        transition: all 0.4s;
        color: black;
        background-color: ${props => props.themeColor?? 'red'};
    }
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
  
