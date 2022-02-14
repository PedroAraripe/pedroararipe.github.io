import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TitleSection } from '../styles';
import Project from '../../../common/components/ProjectCard';
import themesColors from '../../../common/constants/themesColors';
import getRandomOnArray from '../../../common/utils/getRandomOnArray';

function ProjectsSection() {
    let [themeColor, setThemeColor] = useState([themesColors[3]]);
    
    const [list, setList] = useState([]);
    // const user = GetUserDataOnMount();
    useEffect(() => {
        let mounted = true;
        if(mounted) {
            axios.get('https://api.github.com/users/PedroAraripe/repos')
                .then (({ data: response }) => setList(response))
        } 
       return () => mounted = false;
    },[])

    return (
            <section className='pb-md-5 row'>
                <div className="col-12 ">
                    <TitleSection themeColor={themeColor} onClick={() => setThemeColor(getRandomOnArray(themesColors))}>softwares</TitleSection>
                </div>
                <div className="col-12">
                    <ul className="row p-0">
                        {list.map(project => (
                            <li className="col-md-4 p-3" key={project.id}>
                                <Project
                                    themeColor={themeColor}
                                    project={project}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
    );
  }
  
  export default ProjectsSection;
  
