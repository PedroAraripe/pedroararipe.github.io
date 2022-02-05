import { useEffect } from "react";

export default function RandomFaces(){
    const facesClassesList = [
        '',
        'little-smile',
        'straight-face',
    ]

    const facesClassesListNoDefault = facesClassesList.filter((clas) => clas)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    useEffect(() => {
        const dudes = document.querySelectorAll('.dude');
        
        setInterval(() => {
            const randomIndex = getRandomInt(0, facesClassesList.length - 1 )
            const randomFace = facesClassesList[randomIndex];

            dudes.forEach( dude => {
                const dudeClasses = dude.classList
    
                facesClassesListNoDefault.forEach( c => {
                    dudeClasses.remove( c );
                })
    
                if(randomFace) {
                    dude.classList.add(randomFace)
                }
            })
        }, 3000);


    }, []);
}