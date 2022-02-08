const facesClassesList = [
    '',
    'little-smile',
    'straight-face',
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const facesClassesListNoDefault = facesClassesList.filter((c) => c)

export default function setRandomFace(dude) {
    const randomIndex = getRandomInt(0, facesClassesList.length - 1 )
    const randomFace = facesClassesList[randomIndex];
    
    const dudeClasses = dude.classList;

    facesClassesListNoDefault.forEach(c => {
        dudeClasses.remove(c);
    })

    if(randomFace) {
        dude.classList.add(randomFace)
    }
}