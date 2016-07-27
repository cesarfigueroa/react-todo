import Chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { List, Map } from 'immutable';
import reducer from '../../src/reducers/projects';

Chai.use(chaiImmutable);

describe('projects reducer', function() {
  it('returns the initial state', function() {
    expect(reducer(undefined, {})).to.equal(Map());
  });

  describe('ADD_PROJECT', function() {
    it('adds a project', function() {
      let currentState = Map();
      let newState = Map.of(
        1, Map({ id: 1, title: 'Project 1', tasks: List() })
      );

      expect(reducer(currentState, {
        type: 'ADD_PROJECT',
        id: 1,
        title: 'Project 1'
      })).to.equal(newState);
    });
  });

  describe('ADD_TASK_TO_PROJECT', function() {
    context('given an existing project id', function() {
      it('adds a task to a project', function() {
        let currentState = Map.of(
          1, Map({ id: 1, title: 'Project 1', tasks: List() }),
          2, Map({ id: 2, title: 'Project 2', tasks: List() })
        );
        let newState = Map.of(
          1, Map({ id: 1, title: 'Project 1', tasks: List() }),
          2, Map({ id: 2, title: 'Project 2', tasks: List.of(13) })
        );

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_PROJECT',
          projectId: 2,
          taskId: 13
        })).to.equal(newState);
      });
    });

    context('given a missing project id', function() {
      it('returns the current state', function() {
        let currentState = Map.of(
          1, Map({ id: 1, title: 'Project 1', tasks: List.of() })
        );

        expect(reducer(currentState, {
          type: 'ADD_TASK_TO_PROJECT',
          projectId: 100,
          taskId: 1
        })).to.equal(currentState);
      });
    });
  });

  describe('REMOVE_PROJECT', function() {
    context('given an existing project id', function() {
      it('removes a project', function() {
        let currentState = Map.of(
          1, Map({ id: 1, title: 'Project 1', tasks: List() }),
          2, Map({ id: 2, title: 'Project 2', tasks: List() })
        );
        let newState = Map.of(
          2, Map({ id: 2, title: 'Project 2', tasks: List() })
        );

        expect(reducer(currentState, {
          type: 'REMOVE_PROJECT',
          id: 1
        })).to.equal(newState);
      });
    });

    context('given a missing project id', function() {
      it('returns the current state', function() {
        let currentState = Map.of(
          1, Map({ id: 1, title: 'Project 1', tasks: List() }),
          2, Map({ id: 2, title: 'Project 2', tasks: List() })
        );

        expect(reducer(currentState, {
          type: 'REMOVE_PROJECT',
          id: 100
        })).to.equal(currentState);
      });
    });
  });
});
