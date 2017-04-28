import { combineReducers } from 'redux';

const initialState = {
	tasks:[]
}

//managing tasks. adding,removing, and moving
function tasks (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            task: action.task,
            stage: 'ready'
          }
        ]
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