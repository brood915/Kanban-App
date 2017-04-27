import { combineReducers } from 'redux';

const initialState = {
	tasks:[]
}

//managing tasks. adding,removing, and moving
function manageTasks(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        todos: [
          ...state.tasks,
          {
            task: action.task,
            progress: "toDo"
          }
        ]
      })

    default:
      return state
  }
}



const kanbanApp = combineReducers({
  manageTasks
})

export default kanbanApp;