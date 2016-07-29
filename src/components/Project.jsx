import React from 'react';
import TaskListByIdContainer from '../containers/TaskListByIdContainer';

const Project = ({ id, title, tasks }) => {
  return (
    <div>
      <h4>{title}</h4>
      <TaskListByIdContainer projectId={id} tasks={tasks} />
    </div>
  );
};

// Project.propTypes = {
// };

export default Project;
