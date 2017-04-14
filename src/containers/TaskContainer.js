import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../components/TaskBox';
import TaskButtons from '../components/TaskButtons';

function TaskContainer(props) {
    return (
    	<div>
    	<TaskBox />
    	<TaskButtons />
    	</div>
    );
}

TaskContainer.propTypes = {

}

export default TaskContainer;