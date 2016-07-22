import { expect } from 'chai';
import { addList, addTaskToList } from '../../src/actions/lists';

describe('list actions', function() {
  describe('addList', function() {
    it('creates an ADD_LIST action', function() {
      expect(addList(1, 'List 1')).to.eql({
        type: 'ADD_LIST',
        id: 1,
        title: 'List 1'
      });
    });
  });

  describe('addTaskToList', function() {
    it('creates an ADD_TASK_TO_LIST action', function() {
      expect(addTaskToList(1, 2)).to.eql({
        type: 'ADD_TASK_TO_LIST',
        listId: 1,
        taskId: 2
      });
    });
  });
});
