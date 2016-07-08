import React from 'react';

import TaskForm from '../components/TaskForm';
import TaskListContainer from '../containers/TaskListContainer';

const App = () => {
  return (
    <div>
      <TaskListContainer />
      <TaskForm />
    </div>
  );
};

export default App;
