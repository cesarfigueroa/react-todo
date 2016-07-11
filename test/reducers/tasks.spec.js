import { expect } from 'chai';
import reducer from '../../src/reducers/tasks';

describe('tasks reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.eql([]);
  });

  describe('ADD_TASK', function() {
    it('adds a task', function() {
      expect(reducer([], {
        type: 'ADD_TASK',
        id: 1,
        title: 'Task 1'
      })).to.eql([
        {
          id: 1,
          title: 'Task 1',
          isComplete: false
        }
      ]);
    });
  });

  describe('TOGGLE_TASK', function() {
    context('given an existing task id', function() {
      it('toggles the task', function() {
        let currentState = [
          {
            id: 1,
            title: 'Task 1',
            isComplete: false
          },
          {
            id: 2,
            title: 'Task 2',
            isComplete: false
          }
        ];

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 2
        })).to.eql([
          {
            id: 1,
            title: 'Task 1',
            isComplete: false
          },
          {
            id: 2,
            title: 'Task 2',
            isComplete: true
          }
        ]);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = [
          {
            id: 1,
            title: 'Task 1',
            isComplete: false
          }
        ];

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 100
        })).to.eql(currentState);
      });
    });
  });

  describe('EDIT_TASK', function() {
    context('given an existing task id', function() {
      it('returns the newly edited task text', function() {
        let currentState = [
          {
            id: 1,
            title: 'Buy bread',
            isComplete: false
          }
        ];

        let newState = [
          {
            id: 1,
            title: 'Buy bread and butter',
            isComplete: false
          }
        ];

        expect(reducer(currentState, {
          type: 'EDIT_TASK',
          id: 1,
          title: 'Buy bread and butter'
        })).to.eql(newState);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = [
          {
            id: 1,
            title: 'Task 1',
            isComplete: false
          }
        ];

        expect(reducer(currentState, {
          type: 'EDIT_TASK',
          id: 100,
          title: 'Task 2'
        })).to.eql(currentState);
      });
    });
  });
});
