import { useEffect } from 'react';

function StaringEyes(){
    useEffect(() => {
        const dudes = document.querySelectorAll('.dude');

        dudes.forEach((dude) => {
            const observer = new IntersectionObserver((entry) => {
                const element = entry[0]
                if(element.isIntersecting){
                    addMouseMovement();
                } else {
                    removeMouseMovement()
                }
            })

            observer.observe(dude)
        })
    }, []);
}

function addMouseMovement(){
    document.addEventListener('mousemove', getUserMouseMovement);
}

function getUserMouseMovement(e){
    const dudes = document.querySelectorAll('.dude');
    const dudeEyes = document.querySelectorAll('.dude');
    
    dudes.forEach(dude => {
        let directionX = dude.getBoundingClientRect().x - e.clientX; 
        let directionY = dude.getBoundingClientRect().y - e.clientY;
        
        let positiveX = !!( directionX > 0)
        let positiveY = !!( directionY > 0)
 
        let distantX = !!( Math.abs(directionX) > 200)
        let distantY = !!( Math.abs(directionY) > 200)
 
        if( positiveX ) {
            dudeLookLeft(dude);
        } 
        
        if( !positiveX ) {
            dudeLookRight(dude);
        }
        
        if( positiveY ) {
            dudeLookUp(dude);
        } 
        
        if( !positiveY ) {
            dudeLookDown(dude);
        }
    })
    return e;
}

function removeMouseMovement(){
    document.removeEventListener('mousemove', getUserMouseMovement);
}

function dudeLookLeft(dude){
    dude.classList.add('dude-look-left')
    dude.classList.remove('dude-look-right')
}

function dudeLookRight(dude){
    dude.classList.add('dude-look-right')
    dude.classList.remove('dude-look-left')
}

function dudeLookDown(dude){
    dude.classList.add('dude-look-down')
    dude.classList.remove('dude-look-up')
}

function dudeLookUp(dude){
    dude.classList.add('dude-look-up')
    dude.classList.remove('dude-look-down')
}

export default StaringEyes;