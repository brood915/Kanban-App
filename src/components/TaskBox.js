import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './Taskitem';


function TaskBox(props) {
    return (
    	<div className="taskBox">
    		<TaskItem />
    	</div>
    );
}

TaskBox.propTypes = {

}

export default TaskBox;