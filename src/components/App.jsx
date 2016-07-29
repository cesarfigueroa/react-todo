import React from 'react';
import TaskFormContainer from '../containers/TaskFormContainer';
import TaskListContainer from '../containers/TaskListContainer';

const App = () => {
  return (
    <div>
      <TaskListContainer />
      <TaskFormContainer />
    </div>
  );
};

export default App;
