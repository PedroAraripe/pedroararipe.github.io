import React from 'react';
import styled from 'styled-components';

import getRandomOnArray from '../utils/getRandomOnArray';
import themeColors from '../constants/themesColors';
import facesClassesList from '../constants/facesClassList';

// const themeColor = "blue";
// TODO
// quando clicar no dude ele faz tipo um surpresa com a boca e muda o tema da sessão
// ver como que passa um dado de um filho para o pai no react

export default function Dude (props){
    let dudeFace = getRandomOnArray(facesClassesList);

    function generateNewTheme(){
        const newValue= getRandomOnArray(themeColors);
        
        if( props.themeColor === newValue ) generateNewTheme();
        
        else {
            return props.setThemeColor(newValue);
        }
    }

    function generateNewFace(){
        const newValue = getRandomOnArray(facesClassesList);
        
        if( dudeFace == newValue ) {
            generateNewFace();
        } else {
            dudeFace = newValue;
        }
    }

    function clickHandler() {
        generateNewFace();
        generateNewTheme();
    }
    

    return (
        <DudeBody onClick={clickHandler}  themeColor={props.themeColor} className={`dude ${props.className} ${dudeFace}`}>
            <EyesPositionY className='eyes'>
                <LeftEye />
                <RightEye />
            </EyesPositionY>
            <Mouth className='mouth'>
                <AboveTeeth className='teeth-up' />
                <UnderTeeth className='teeth-down' />
            </Mouth>
        </DudeBody>
    )
}

const DudeBody = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${props => ( props.themeColor ?? '#cc3333')};;

    width: 150px;
    height: 150px;
    
    border-radius: 25px 10px;

    :hover,:active, :focus {
        position: relative;
        left: 0 !important;
        top: 0 !important;

        transition: all 1s;
        -webkit-transition-delay:all .5 ease;
        -moz-transition-delay:all .5 ease;
        -ms-transition-delay:all .5 ease;
        -o-transition-delay:all .5 ease;
        

        > * {
            position: relative;
            left: 0 !important;
            top: 0 !important;
            
            transition: all .5 ease;
            -webkit-transition-delay:all .5 ease;
            -moz-transition-delay:all .5 ease;
            -ms-transition-delay:all .5 ease;
            -o-transition-delay:all .5 ease;
        }
        
    }
`

const EyesPositionY = styled.div`
    position: relative;
    
    display: flex;
    align-items:center;
    justify-content: space-around;
    
    min-height: 25px;

    width: 100%;
`

const LeftEye = styled.div`
    height: 25px;
    width: 25px;

    background-color: #1f1f1f;
    
    border-radius: 50%;
`

const RightEye = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #1f1f1f;
`

const Mouth = styled.div`
    height: 50px;
    width: 100px;
    
    max-height: 150px;
    max-width: 200px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    background-color: #1f1f1f;

    margin-top: 10%;

    border-radius: 10% 10% 50% 50%;

    cursor: pointer;

    &:active {
        animation: scale-big 3s linear forwards;
    }
`

const AboveTeeth = styled.div`
    height: 20px;
    width: 100%;
    
    background-color: #d4d4d4;

    border-radius: 10% 10% 10% 10%;
`

const UnderTeeth = styled.div`
    position: relative;
    left: -15px;
    
    height: 8px;
    width: 12px;

    background-color: #d4d4d4;
    border-radius: 25% 50% 10% 10%;
`
