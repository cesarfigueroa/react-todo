import Chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { List } from 'immutable';
import reducer from '../../src/reducers/taskIds';

Chai.use(chaiImmutable);

describe('task ids reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.equal(List());
  });

  describe('ADD_TASK', function() {
    it('adds a task id', function() {
      let currentState = List();
      let newState = List.of(1);

      expect(reducer(currentState, {
        type: 'ADD_TASK',
        id: 1
      })).to.equal(newState);
    });
  });

  describe('REMOVE_TASK', function() {
    it('removes a task id', function() {
      let currentState = List.of(1, 2, 3);
      let newState = List.of(1, 3);

      expect(reducer(currentState, {
        type: 'REMOVE_TASK',
        id: 2
      })).to.equal(newState);
    });
  });
});
