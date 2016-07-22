import { expect } from 'chai';
import reducer from '../../src/reducers/lists';

describe('tasks reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.eql([]);
  });

  describe('ADD_LIST', function() {
    it('adds a list', function() {
      let currentState = [];
      let newState = [{ id: 1, title: 'List 1', tasks: [] }];

      expect(reducer(currentState, {
        type: 'ADD_LIST',
        id: 1,
        title: 'List 1'
      })).to.eql(newState);
    });
  });

  describe('ADD_TASK_TO_LIST', function() {
    context('given an empty tasks array', function () {
      it('adds a task id to a list\'s tasks', function() {
        let currentState = [{ id: 1, title: 'List 1', tasks: [] }];
        let newState = [{ id: 1, title: 'List 1', tasks: [2] }];

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_LIST',
          listId: 1,
          taskId: 2
        })).to.eql(newState);
      });
    });

    context('given a populated tasks array', function() {
      it('adds appends a task id to the list\'s tasks', function() {
        let currentState = [
          { id: 1, title: 'List 1', tasks: [2] }
        ];

        let newState = [
          { id: 1, title: 'List 1', tasks: [2, 4] }
        ];

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_LIST',
          listId: 1,
          taskId: 4
        })).to.eql(newState);
      });
    });

    context('given multiple lists', function() {
      it('adds the taskId to the correct list', function() {
        let currentState = [
          { id: 1, title: 'List 1', tasks: [2] },
          { id: 2, title: 'List 2', tasks: [3] }
        ];

        let newState = [
          { id: 1, title: 'List 1', tasks: [2] },
          { id: 2, title: 'List 2', tasks: [3, 5] }
        ];

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_LIST',
          listId: 2,
          taskId: 5
        })).to.eql(newState);
      });
    });

    context('given a missing listId', function() {
      it('returns the current state', function() {
        let currentState = [
          { id: 1, title: 'List 1', tasks: [2] }
        ];

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_LIST',
          listId: 100,
          taskId: 5
        })).to.eql(currentState);
      });
    });
  });
});
