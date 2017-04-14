import React from 'react';
import ModalContainer from './ModalContainer';
import TaskContainer from './TaskContainer';

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
		let ha = 'hahaha'
		return (<div>
			<ModalContainer/>
			<TaskContainer/>
			</div>);

			}
	}


export default MainContainer;
