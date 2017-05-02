import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import { Button } from 'react-bootstrap';


function TodoBox(props) {
	
	const border = {borderLeft: props.border};
    return (
    	<div className="taskBox" style = {border}>
	    	{props.children}
	    	{props.tasks
	    	.filter((each)=>(each.stage === 'ready'))
	    	.map((each, index)=>(
	    	<div  className="tasks" key={index}>
		    	<Tasks index = {each.index} removeTask = {props.removeTask} tasks={each}/>
		    	<Button className = 'toDoBtn' onClick = {()=>props.startTask(each.index)} bsStyle='primary'>Start</Button>
		    </div>))}
    	</div>
    );
}




TodoBox.propTypes = {
	 startTask: PropTypes.func.isRequired,
	 tasks: PropTypes.array.isRequired,
	 removeTask: PropTypes.func.isRequired
}

export default TodoBox;