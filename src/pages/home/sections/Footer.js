import React from 'react';

import styled from 'styled-components'

const WrapperFooter = styled.footer`
    font-size: .7rem;
`

function FooterSection() {

    return (
            <WrapperFooter className='p-5 d-flex align-items-center justify-content-center'>
                Designed & Built by Lucas Araripe
            </WrapperFooter>
    );
  }
  
  export default FooterSection;
  
