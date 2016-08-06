import React, { PureComponent } from 'react';
import TaskFormContainer from '../containers/TaskFormContainer';
import TaskListContainer from '../containers/TaskListContainer';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TaskListContainer />
        <TaskFormContainer />
      </div>
    );
  }
}

export default App;
