import React from 'react';
import Modal from '../components/Modal';
import TaskContainer from './TaskContainer';
import styles from '../style/main.scss';
import TaskButton from '../components/TaskButton';

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
		return (<div className = {styles.mainContainer}>
			<TaskButton className={styles.btn}/>
			<TaskContainer/>
			<Modal />
			</div>);

			}
	}


export default MainContainer;
