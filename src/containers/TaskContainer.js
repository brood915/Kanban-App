import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../components/TaskBox';

function TaskContainer(props) {
    return (
    	<div id="taskContainer">
    	<TaskBox id="ready"/>
    	<TaskBox id="progress"/>
    	<TaskBox id="done"/>
    	</div>
    );
}

TaskContainer.propTypes = {

}

export default TaskContainer;