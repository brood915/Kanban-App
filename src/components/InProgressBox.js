import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import { Button } from 'react-bootstrap';

function InProgressBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
	    	{props.children}
	    	{props.tasks
	    	.filter((each)=>(each.stage === 'in-progress'))
	    	.map((each, index)=>(
	    	<div  className="tasks" key={index}>
		    	<Tasks index = {each.index} tasks={each} removeTask = {props.removeTask}/>
		    	<Button className = 'progressBtn' onClick = {()=>props.finishTask(each.index)} bsStyle='primary'>Finish</Button>
		    </div>))}
    	</div>
    );
}

InProgressBox.propTypes = {
	 finishTask: PropTypes.func.isRequired,
	 tasks: PropTypes.array.isRequired,
	 removeTask: PropTypes.func.isRequired
}

export default InProgressBox;