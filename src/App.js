import React from 'react';

import styled from 'styled-components'

import Home from './pages/home/index.js'

const WrapperContainerX = styled.div`
  padding: 0 20px;

  @media (min-width: 768px){
    padding: 0 15%;
  }
`

function App() {
  return (
    <WrapperContainerX className="App">
     <Home />
    </WrapperContainerX>
  );
}

export default App;
