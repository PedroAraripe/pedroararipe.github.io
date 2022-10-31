import React from 'react';

import HeroSection from './sections/HeroSection';
import Navbar from '../../common/components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import FooterSection from './sections/Footer';

import DudeOnScreen from '../../common/utils/DudeOnScreen'


function Home(){
    DudeOnScreen();
    
    return (
        <>
            <Navbar />
            <div className='container'>
                <HeroSection />
                <About />
                <Experience />
                <Projects />
                <FooterSection />
            </div>
        </>
    )
}

export default Home;