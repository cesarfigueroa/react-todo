import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TaskList from '../../src/components/TaskList';

describe('TaskList', function() {
  before(function() {
    let tasks = [
      {
        id: 1,
        title: 'Buy bread',
        isComplete: true
      }
    ];

    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<TaskList tasks={tasks} onClick={f => f} />);

    this.result = renderer.getRenderOutput();
  });

  it('renders', function() {
    let task = this.result.props.children[0];

    expect(task.props.id).to.equal(1);
    expect(task.props.title).to.equal('Buy bread');
    expect(task.props.isComplete).to.be.true;
  });
});
