import Chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Checkbox from '../../src/components/Checkbox';

Chai.use(spies);

describe('Checkbox', function() {
  before(function() {
    this.props = { isChecked: true, onClick: Chai.spy() };
    this.renderer = ReactTestUtils.createRenderer();
  });

  describe('isChecked', function() {
    context('when it is not checked', function() {
      it('renders', function() {
        this.renderer.render(<Checkbox {...this.props} isChecked={false} />);

        expect(this.renderer.getRenderOutput().props.className)
          .to.equal('checkbox ');
      });
    });

    context('when it is checked', function() {
      it('renders with the checked class', function() {
        this.renderer.render(<Checkbox {...this.props} isChecked={true} />);

        expect(this.renderer.getRenderOutput().props.className)
          .to.equal('checkbox checkbox--checked');
      });
    });
  });

  describe('onClick', function() {
    context('when it is clicked', function() {
      it('calls the onClick function', function() {
        this.renderer.render(<Checkbox {...this.props} />);

        this.props.onClick();

        expect(this.props.onClick).to.have.been.called.once;
      });
    });
  });
});
