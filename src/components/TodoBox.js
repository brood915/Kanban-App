import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import { Button } from 'react-bootstrap';

function TodoBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
	    	{props.children}
	    	{props.tasks
	    	.filter((each)=>(each.stage === 'ready'))
	    	.map((each, index)=>(
	    	<div  className="tasks" key={index}>
		    	<Tasks tasks={each}/>
		    	<Button bsStyle='primary'>Start</Button>
		    </div>))}
    	</div>
    );
}




TodoBox.propTypes = {

}

export default TodoBox;