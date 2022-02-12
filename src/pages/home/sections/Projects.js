import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TitleSection } from '../styles';
import Project from '../../../common/components/ProjectCard';
import themesColors from '../../../common/themesColors';

function ProjectsSection() {
    let [themeColor] = useState([themesColors[2]]);
    
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
            <section className='mt-5 row'>
                <div className="col-12 ">
                    <TitleSection themeColor={themeColor}>softwares</TitleSection>
                </div>
                <div className="col-12">
                    <div className="row">
                        {list.map(project => (
                            <div className="col-md-4 mb-4" key={project.id}>
                                <Project
                                    themeColor={themeColor}
                                    className="mb-4"
                                    project={project}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
  }
  
  export default ProjectsSection;
  
