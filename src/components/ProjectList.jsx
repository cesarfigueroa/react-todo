import React from 'react';
import Project from '../components/Project';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => {
        return (
          <Project
            key={project.get('id')}
            id={project.get('id')}
            title={project.get('title')}
            tasks={project.get('tasks')}
          />
        );
      })}
    </div>
  );
};

// ProjectList.propTypes = {
// };

export default ProjectList;
