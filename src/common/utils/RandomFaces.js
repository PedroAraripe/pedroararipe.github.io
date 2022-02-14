import facesClassesList from '../constants/facesClassList';
import getRandomOnArray from './getRandomOnArray';


const facesClassesListNoDefault = facesClassesList.filter((c) => c)

export default function setRandomFace(dude) {
    const randomFace = getRandomOnArray(facesClassesList);
    
    const dudeClasses = dude.classList;

    facesClassesListNoDefault.forEach(c => {
        dudeClasses.remove(c);
    })

    if(randomFace) {
        dude.classList.add(randomFace)
    }
}