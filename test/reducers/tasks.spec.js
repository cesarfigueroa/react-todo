import Chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import Immutable from 'immutable';
import reducer from '../../src/reducers/tasks';

Chai.use(chaiImmutable);

describe('tasks reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.eql(Immutable.List());
  });

  describe('ADD_TASK', function() {
    it('adds a task', function() {
      let currentState = Immutable.List();
      let newState = Immutable.List.of(
        Immutable.Map({ id: 1, title: 'Task 1', isComplete: false })
      );

      expect(reducer(currentState, {
        type: 'ADD_TASK',
        id: 1,
        title: 'Task 1'
      })).to.equal(newState);
    });
  });

  describe('TOGGLE_TASK', function() {
    context('given an existing task id', function() {
      it('toggles the task', function() {
        let currentState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false }),
          Immutable.Map({ id: 2, title: 'Task 2', isComplete: false })
        );

        let newState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false }),
          Immutable.Map({ id: 2, title: 'Task 2', isComplete: true })
        );

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 2
        })).to.equal(newState);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false })
        );

        expect(reducer(currentState, {
          type: 'TOGGLE_TASK',
          id: 100
        })).to.equal(currentState);
      });
    });
  });

  describe('REMOVE_TASK', function() {
    context('given an existing task id', function() {
      it('removes the task', function() {
        let currentState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false }),
          Immutable.Map({ id: 2, title: 'Task 2', isComplete: false }),
          Immutable.Map({ id: 3, title: 'Task 3', isComplete: true })
        );

        let newState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false }),
          Immutable.Map({ id: 3, title: 'Task 3', isComplete: true })
        );

        expect(reducer(currentState, {
          type: 'REMOVE_TASK',
          id: 2
        })).to.equal(newState);
      });
    });

    context('given a missing task id', function() {
      it('returns the current state', function() {
        let currentState = Immutable.List.of(
          Immutable.Map({ id: 1, title: 'Task 1', isComplete: false }),
          Immutable.Map({ id: 2, title: 'Task 2', isComplete: false }),
          Immutable.Map({ id: 3, title: 'Task 3', isComplete: true })
        );

        expect(reducer(currentState, {
          type: 'REMOVE_TASK',
          id: 100
        })).to.equal(currentState);
      });
    });
  });
});
