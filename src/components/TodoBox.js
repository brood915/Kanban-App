import React from 'react';
import PropTypes from 'prop-types';


function TodoBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
    	{props.children}
    		{props.tasks.map((each)=>(
    			<div key={props.tasks.indexOf(each)}>
    				<div>{each.task.name}</div>
    				<div>{each.task.task}</div>
    			</div>))}
    	</div>
    );
}




TodoBox.propTypes = {

}

export default TodoBox;