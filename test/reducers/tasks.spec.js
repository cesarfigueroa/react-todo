import { expect } from 'chai';
import reducer from '../../src/reducers/tasks';

describe('tasks reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.eql([]);
  });

  describe('ADD_TASK', function() {
    it('adds a task', function() {
      let currentState = [];
      let newState = [
        { id: 1, title: 'Task 1', isComplete: false }
      ];

      expect(reducer(currentState, {
        type: 'ADD_TASK',
        id: 1,
        title: 'Task 1'
      })).to.eql(newState);
    });
  });

  describe('TOGGLE_TASK', function() {
    context('given an existing task id', function() {
      it('toggles the task', function() {
        let currentState = [
          { id: 1, title: 'Task 1', isComplete: false },
          { id: 2, title: 'Task 2', isComplete: false }
        ];

        let newState = [
          { id: 1, title: 'Task 1', isComplete: false },
          { id: 2, title: 'Task 2', isComplete: true }
        ];

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 2
        })).to.eql(newState);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = [
          { id: 1, title: 'Task 1', isComplete: false }
        ];

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 100
        })).to.eql(currentState);
      });
    });
  });

  describe('REMOVE_TASK', function() {
    context('given an existing task id', function() {
      it('removes the task', function() {
        let currentState = [
          { id: 1, title: 'Task 1', isComplete: false },
          { id: 2, title: 'Task 2', isComplete: false },
          { id: 3, title: 'Task 3', isComplete: true }
        ];

        let newState = [
          { id: 1, title: 'Task 1', isComplete: false },
          { id: 3, title: 'Task 3', isComplete: true }
        ];

        expect(reducer(currentState, {
          type: 'REMOVE_TASK',
          id: 2
        })).to.eql(newState);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = [
          { id: 1, title: 'Task 1', isComplete: false },
          { id: 2, title: 'Task 2', isComplete: false },
          { id: 3, title: 'Task 3', isComplete: true }
        ];

        expect(reducer(currentState, {
          type: 'REMOVE_TASK',
          id: 100
        })).to.eql(currentState);
      });
    });
  });
});
