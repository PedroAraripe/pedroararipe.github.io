import React from 'react';

import HeroSection from './sections/HeroSection';
import About from './sections/About';
import Experience from './sections/Experience';

function Home(){
    return (
        <>
            <HeroSection />
            <About />
            <Experience />
        </>
    )
}

export default Home;