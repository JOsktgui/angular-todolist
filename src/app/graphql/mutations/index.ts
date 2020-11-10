import addTask from './addTask';
import removeTask from './removeTask';
import { taskReactiveVar } from '../../cache';

export const taskMutations = {
  addTask: addTask(taskReactiveVar),
  removeTask: removeTask(taskReactiveVar)
};
