import React from 'react';
import ModalContainer from './ModalContainer';
import TaskContainer from './TaskContainer';
import TaskButton from '../components/TaskButton'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    		modal: 'off',
    		toDo: {},
    		progress: {},
    		done: {}
    	}
	}
	render() {
		return (<div>
			<ModalContainer/>
			<TaskContainer/>
			<TaskButton />
			</div>);

			}
	}


export default MainContainer;
