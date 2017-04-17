import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './Taskitem';


function TaskBox(props) {
	const border = {border: props.border }
    return (
    	<div className="taskBox" style = {border}>
    		<TaskItem />
    	</div>
    );
}

TaskBox.propTypes = {

}

export default TaskBox;