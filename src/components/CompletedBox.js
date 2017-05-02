import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import { Button } from 'react-bootstrap';

function CompletedBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
	    	{props.children}
	    	{props.tasks
	    	.filter((each)=>(each.stage === 'completed'))
	    	.map((each, index)=>(
	    	<div  className="tasks" key={index}>
		    	<Tasks index = {each.index} removeTask = {props.removeTask} tasks={each}/>
		    	<Button className='completedBtn' onClick = {()=>props.removeTask(each.index)} bsStyle='danger'>Remove</Button>
		    </div>))}
    	</div>
    );
}

CompletedBox.propTypes = {
	 tasks: PropTypes.array.isRequired,
	 removeTask: PropTypes.func.isRequired
}

export default CompletedBox;