import React, { useState } from 'react';
import styled from 'styled-components';
import themesColors from '../constants/themesColors';

const ContactButton = styled.a`
    font-weight: bold;

    border: 1px solid black;
    background-color: black;
    color: white;
    
    :hover {
      color: black;
      font-weight: bold;
      transition: all 0.4s;
      background-color: transparent;
    }
`

export default function Navbar() {
  
  let [themeColor] = useState([themesColors[1]]);
  
  return (
    <div
      className='row w-100'
      style={{
        position: 'sticky',
        'top': 0,
        'left': 0,
        'zIndex': 9999999,
        'opacity': 0.8,
        'backgroundColor': themeColor
      }}
    >
      <div className='col-12'>
        <ul className="container py-2 mb-0 p-0 d-flex justify-content-between align-items-center">
          <li>
            <a href="/#" style={{color: 'white'}}>
              <i className="fa-solid fa-house mt-1 mt-md-2" style={{fontSize: '1.5rem'}}></i>
            </a>
          </li>
          <li>
            <ContactButton
              href="https://www.linkedin.com/in/luraripe-dev/"
              target="_blank"
              rel="noreferrer"
              className="btn px-5 py-2">
                  Say hello
          </ContactButton>
          </li>
        </ul>
      </div>
    </div>
  )
}