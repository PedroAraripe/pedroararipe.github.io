import React from 'react';
import styled from 'styled-components';

export default function Dude (props){
        return (
            <DudeBody dudeColor={props.dudeColor} className='dude'>
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${props => ( props.dudeColor ?? '#cc3333')};;

    width: 150px;
    height: 150px;
    
    border-radius: 25px 10px;
`

const EyesPositionY = styled.div`
    position: relative;
    
    display: flex;
    align-items:center;
    justify-content: space-around;
    
    min-height: 25px;

    width: 100%;

    > * {
        cursor: pointer;
        
        &:active {
            animation: blinking 3s linear forwards;
        }
    }
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

    &:active,&:focus {
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
