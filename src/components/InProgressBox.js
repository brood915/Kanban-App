import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './Taskitem';

function InProgressBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
    		{props.children}
    		<TaskItem>taskItem</TaskItem>
    	</div>
    );
}

InProgressBox.propTypes = {

}

export default InProgressBox;