import React from 'react';

import HeroSection from './sections/HeroSection';
import About from './sections/About';
import Experience from './sections/Experience';

import RandomFaces from '../../common/utils/RandomFaces'
import DudeOnScreen from '../../common/utils/DudeOnScreen'


function Home(){
    DudeOnScreen();
    RandomFaces();
    
    return (
        <>
            <HeroSection />
            <About />
            <Experience />
        </>
    )
}

export default Home;