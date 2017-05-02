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
        tasks: state.tasks.filter((each)=>{return each.index !== action.index})
      })      
    case 'START_TASK':
      return Object.assign({}, state, {
        tasks: state.tasks.map((each, index) => {
      if (each.index === action.index) {
        return Object.assign({}, each, {
          stage: 'in-progress'
        })
      }
      return each
    })
      })
    case 'FINISH_TASK':
      return Object.assign({}, state, {
        tasks: state.tasks.map((each, index) => {
        if (each.index === action.index) {
          return Object.assign({}, each, {
            stage: 'completed'
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