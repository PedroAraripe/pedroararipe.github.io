import React from 'react';
import HeroSection from './pages/home/sections/HeroSection';

import styled from 'styled-components'

const WrapperContainerX = styled.div`
  padding: 0 20px;

  @media (min-width: 768px){
    padding: 0 15%;
  }
`

function App() {
  return (
    <WrapperContainerX className="App">
        <HeroSection />
    </WrapperContainerX>
  );
}

export default App;
