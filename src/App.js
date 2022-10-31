import React from 'react';

import styled from 'styled-components'

import Home from './pages/home/index.js'

const WrapperContainerX = styled.div`
  max-width: 100vw;
  overflow: clip;
`

function App() {
  return (
    <WrapperContainerX className="App">
     <Home />
    </WrapperContainerX>
  );
}

export default App;
