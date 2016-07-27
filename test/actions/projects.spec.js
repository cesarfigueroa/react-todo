import { expect } from 'chai';
import {
  addProject,
  addTaskToProject,
  removeProject
} from '../../src/actions/projects';

describe('project actions', function() {
  describe('addProject', function() {
    it('creates an ADD_PROJECT action', function() {
      expect(addProject(1, 'Project 1')).to.eql({
        type: 'ADD_PROJECT',
        id: 1,
        title: 'Project 1'
      });
    });
  });

  describe('addTaskToProject', function() {
    it('creates an ADD_TASK_TO_PROJECT action', function() {
      expect(addTaskToProject(1, 2)).to.eql({
        type: 'ADD_TASK_TO_PROJECT',
        projectId: 1,
        taskId: 2
      });
    });
  });

  describe('removeProject', function() {
    it('creates a REMOVE_PROJECT action', function() {
      expect(removeProject(1)).to.eql({
        type: 'REMOVE_PROJECT',
        id: 1
      });
    });
  });
});
