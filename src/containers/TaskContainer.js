import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../components/TaskBox';
import styles from '../'

function TaskContainer(props) {
    return (
    	<div id="taskContainer">
    	<TaskBox border="blue 1px solid"/>
    	<TaskBox border="red 1px solid"/>
    	<TaskBox border="green 1px solid"/>
    	</div>
    );
}

TaskContainer.propTypes = {

}

export default TaskContainer;