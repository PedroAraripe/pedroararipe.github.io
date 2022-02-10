import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TitleSection } from '../styles';
import Project from '../../../common/components/ProjectCard'

const getUserData = async () => {
    const {data : userInfo} = await axios.get('https://api.github.com/users/PedroAraripe')
    console.log(userInfo)

    return userInfo;
};

// function GetUserDataOnMount(){

//     useEffect(() => {
//         setList(getUserData());
//     })
// }




function ProjectsSection() {
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
                    <TitleSection className='mb-4'>Projects</TitleSection>
                </div>
                <div className="col-12">
                    <div className="row">
                        {list.map(repo => (
                                <div className="col-md-3">
                                    <Project projectName={repo.name} key={repo.id} />
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
  }
  
  export default ProjectsSection;
  
