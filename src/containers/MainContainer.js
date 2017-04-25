import React from 'react';
import ModalContainer from './ModalContainer';
import TaskContainer from './TaskContainer';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    		toDo: {},
    		progress: {},
    		done: {}
    	}
	}
	render() {
		return (<div className = "mainContainer">
			<ModalContainer />
			<TaskContainer/>
			</div>);

			}
	}


export default MainContainer;
