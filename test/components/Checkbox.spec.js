import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Checkbox from '../../src/components/Checkbox';

describe('Checkbox', function() {
  before(function() {
    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<Checkbox isChecked={true} />);

    this.result = renderer.getRenderOutput();
  });

  it('renders', function() {
    expect(this.result.props.children).to.eql('[x]');
  });
});
