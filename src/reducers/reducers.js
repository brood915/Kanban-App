import { combineReducers } from 'redux';

const initialState = {
	tasks:[]
}

let index = 0;

//managing tasks. adding,removing, and moving
function tasks (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            task: action.task,
            stage: 'ready',
            index: index++
          }
        ]
      })
    case 'REMOVE_TASK':
      return Object.assign({}, state, {
        tasks: [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1) ]
      })      
    case 'START_TASK':
      return Object.assign({}, state, {
        tasks: state.tasks.map((each, index) => {
      if (index === action.index) {
        return Object.assign({}, each, {
          stage: 'in-progress'
        })
      }
      return each
    })
      })

    default:
      return state
  }
}



const kanbanApp = combineReducers({
  tasks
})

export default kanbanApp;