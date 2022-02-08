import { useEffect } from 'react';
import setRandomFace from './RandomFaces'

const StaringEyes = () => {

    useEffect(() => {
        const dudes = document.querySelectorAll('.dude');

        dudes.forEach((dude) => {
            const observer = new IntersectionObserver((entry) => {
                const element = entry[0];

                // TODO
                // Tentar fazer as animações que nem a do site que fiz, usando uma classe callback de animação
                // que adicionará outra de animação quando o objeto estiver na tela, liberando q ele anime

                removeClassDirections(dudes);
                addMouseMovement();
                if(element.isIntersecting){
                    dude.classList.add('bouncing');
                    setRandomFace(dude);
                } else {
                    dude.classList.remove('bouncing');
                }
                // else {
                    //     removeMouseMovement();
                    // }
                })
                
                observer.observe(dude)
            })
    });
}

function addMouseMovement(){
    document.addEventListener('mousemove', getUserMouseMovement);
}

function getUserMouseMovement(e){
    const dudes = document.querySelectorAll('.dude');
    
    dudes.forEach(dude => {
        let directionX = dude.getBoundingClientRect().x - e.clientX; 
        let directionY = dude.getBoundingClientRect().y - e.clientY;
        
        let positiveX = !!( directionX > 0)
        let positiveY = !!( directionY > 0)

        // TODO 
        // precisa pegar o valor do tamanho do bixim verificar se o mouse ta dentro dele,
        // caso esteja, ele n vai olhar pros lados

        if( positiveX && directionX !== 0 ) {
            dudeLookLeft(dude);
        } else if( !positiveX && directionX !== 0 ){
            dudeLookRight(dude);
        }
        
        if( positiveY && directionY !== 0 ) {
            dudeLookUp(dude);
        } else if( !positiveY && directionY !== 0 ){
            dudeLookDown(dude);
        }


    })
    return e;
}

function removeClassDirections(dudes){
    const lookingDirectionClasses = [
        'dude-look-left',
        'dude-look-right',
        'dude-look-up',
        'dude-look-down',
    ]

    dudes.forEach(dude => {
        lookingDirectionClasses.forEach( c => {
            dude.classList.remove( c )
        })
    })
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