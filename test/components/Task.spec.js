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

    this.props = props;
    this.renderer = ReactTestUtils.createRenderer();
  });

  it('renders', function() {
    this.renderer.render(<Task {...this.props} />);

    expect(this.renderer.getRenderOutput().props.children).to.eql([
      <Checkbox isChecked={true} onClick={this.props.onClick} />,
      <span className="task-title task-title--completed">Buy bread</span>
    ]);
  });

  context('when complete', function() {
    it('renders with the completed class', function() {
      this.renderer.render(<Task {...this.props} isComplete={false} />);

      expect(this.renderer.getRenderOutput().props.children).to.eql([
        <Checkbox isChecked={false} onClick={this.props.onClick} />,
        <span className="task-title">Buy bread</span>
      ]);
    });
  });

  context('when clicked', function() {
    it('calls the onClick function', function() {
      this.renderer.render(<Task {...this.props} />);

      this.renderer.getRenderOutput().props.children[0].props.onClick();

      expect(this.props.onClick).to.have.been.called.once;
    });
  });
});
