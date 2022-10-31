import React, { useState } from 'react';
import styled from 'styled-components';

import Dude from '../../../common/components/Dude';
import themesColors from '../../../common/constants/themesColors';

function HeroSection() {
    let [themeColor, setThemeColor] = useState([themesColors[1]]);

    return (
    <Wrapper className='row'>
            <div className="col-12 mt-4 mt-lg-5 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <section className="d-flex w-100 flex-column align-items-center d-md-block text-center text-md-start">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-9">
                        <div>
                            <MainTitle className='mb-2'>hi, <SpanTheme themeColor={themeColor}> araripe </SpanTheme> here.</MainTitle>
                            <SecondaryTitleTheme themeColor={themeColor}>I build stuff sometimes.</SecondaryTitleTheme>
                        </div>
                        <HeroTextContainer className="pt-4 pb-4 pb-md-5">I'm a Fullstack Developer based in Brazil and i love learning everything that helps me express my creativity.</HeroTextContainer>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-lg-end">
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
    height: 90vh;
    max-height: 500px;
`

const SpanTheme = styled.span`
    color: ${props => props.themeColor?? 'red'};
`

const SecondaryTitleTheme = styled.h2`
    color: ${props => props.themeColor?? 'red'};
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
  
