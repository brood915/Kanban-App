import { ADD_TASK, REMOVE_TASK, START_TASK } from './actionTypes';


//action creators
export function addTask(task) {
  return { type: ADD_TASK, task }
}


export function removeTask(index) {
  return { type: REMOVE_TASK, index }
}

export function startTask (index) {
	return { type: START_TASK, index }
}
