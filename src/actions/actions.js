import { ADD_TASK, REMOVE_TASK } from './actionTypes';

export function addTask(task) {
  return { type: ADD_TASK, task }
}


export function removeTask(index) {
  return { type: ADD_TASK, index }
}

