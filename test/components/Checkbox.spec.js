import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Checkbox from '../../src/components/Checkbox';

describe('Checkbox', function() {
  before(function() {
    this.renderer = ReactTestUtils.createRenderer();
  });

  context('when it is not checked', function() {
    it('renders', function() {
      this.renderer.render(<Checkbox isChecked={false} />);

      expect(this.renderer.getRenderOutput().props.className)
        .to.equal('checkbox ');
    });
  });

  context('when it is checked', function() {
    it('renders with the checked class', function() {
      this.renderer.render(<Checkbox isChecked={true} />);

      expect(this.renderer.getRenderOutput().props.className)
        .to.equal('checkbox checkbox--checked');
    });
  });
});
