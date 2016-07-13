import { expect } from 'chai';
import { List, Map } from 'immutable';

import reducer from '../../src/reducers/tasks';

describe('tasks reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, { type: 'INIT' }).equals(List())).to.equal(true);
  });

  describe('ADD_TASK', function() {
    it('adds a task', function() {
      let currentState = List();
      let newState = List([
        Map({
          id: 1,
          title: 'Task 1',
          isComplete: false
        })
      ]);

      expect(reducer(currentState, {
        type: 'ADD_TASK',
        id: 1,
        title: 'Task 1'
      }).equals(newState)).to.equal(true);
    });
  });

  describe('TOGGLE_TASK', function() {
    context('given an existing task id', function() {
      it('toggles the task', function() {
        let currentState = List([
          Map({
            id: 1,
            title: 'Task 1',
            isComplete: false
          }),
          Map({
            id: 2,
            title: 'Task 2',
            isComplete: false
          })
        ]);

        let newState = List([
          Map({
            id: 1,
            title: 'Task 1',
            isComplete: false
          }),
          Map({
            id: 2,
            title: 'Task 2',
            isComplete: true
          })
        ]);

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 2
        }).equals(newState)).to.equal(true);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = List([
          Map({
            id: 1,
            title: 'Task 1',
            isComplete: false
          })
        ]);

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 100
        }).equals(currentState)).to.equal(true);
      });
    });
  });
});
