import { expect } from 'chai';
import { addTask, toggleTask, editTask } from '../../src/actions';

describe('task actions', function() {
  describe('addTask', function() {
    it('creates an ADD_TASK action', function() {
      expect(addTask(1, 'Task 1')).to.eql({
        type: 'ADD_TASK',
        id: 1,
        title: 'Task 1'
      });
    });
  });

  describe('toggleTask', function() {
    it('creates a TOGGLE_TASK action', function() {
      expect(toggleTask(1)).to.eql({
        type: 'TOGGLE_TASK',
        id: 1
      });
    });
  });

  describe('editTask', function() {
    it('creates an EDIT_TASK action', function() {
      expect(editTask(1, 'Task 1')).to.eql({
        type: 'EDIT_TASK',
        id: 1,
        title: 'Task 1'
      });
    });
  });
});
