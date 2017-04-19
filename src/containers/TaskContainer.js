import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../components/TaskBox';
import styles from '../style/main.scss';
import TaskButton from '../components/TaskButton';

function TaskContainer(props) {
    return (
    	<div className={styles.taskContainer}>
    	<TaskButton />
    	<TaskBox border="#47B8E0 7px solid"><h4><span className={styles.arrowDown}></span>Ready</h4></TaskBox>
    	<TaskBox border="#fbd14b 7px solid"><h4><span className={styles.arrowDown}></span>In-Progress</h4></TaskBox>
    	<TaskBox border="#FA5D29 7px solid"><h4><span className={styles.arrowDown}></span>Done</h4></TaskBox>
    	</div>
    );
}

TaskContainer.propTypes = {

}

export default TaskContainer;