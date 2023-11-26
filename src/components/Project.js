import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <>
        <div className='container'>
            <h2>My Projects</h2>
            <div className="row">
                <div className="col-md-4">
                    <ProjectCard title="MyProject-1" description="MyDesc-1"/>
                </div>
                <div className="col-md-4">
                    <ProjectCard title="MyProject-2" description="MyDesc-2" />
                </div>
                <div className="col-md-4">
                    <ProjectCard title="MyProject-3" description="MyDesc-3" />
                </div>
            </div>
        </div>
    </>
  );
}

export default Project