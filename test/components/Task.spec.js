import Chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Task from '../../src/components/Task';
import Checkbox from '../../src/components/Checkbox';

Chai.use(spies);

describe('Task', function() {
  before(function() {
    let props = {
      title: 'Buy bread',
      isComplete: true,
      onClick: Chai.spy()
    };

    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<Task {...props} />);

    this.props = props;
    this.result = renderer.getRenderOutput();
  });

  it('renders', function() {
    expect(this.result.props.onClick).to.eql(this.props.onClick);
    expect(this.result.props.children).to.eql([
      <Checkbox isChecked={true} />,
      <span className="task-title task-title--completed">Buy bread</span>
    ]);
  });

  context('when clicked', function() {
    it('calls the onClick function', function() {
      this.props.onClick();

      expect(this.props.onClick).to.have.been.called.once;
    });
  });
});
