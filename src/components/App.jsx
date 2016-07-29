import React from 'react';

import TaskForm from '../components/TaskForm';
import ProjectListContainer from '../containers/ProjectListContainer';

const App = () => {
  return (
    <div>
      <ProjectListContainer />
      <TaskForm />
    </div>
  );
};

export default App;
