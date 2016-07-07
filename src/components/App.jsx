import React from 'react';

import TaskForm from '../components/TaskForm';
import TaskListContainer from '../containers/TaskListContainer';

const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskListContainer />
    </div>
  );
};

export default App;
