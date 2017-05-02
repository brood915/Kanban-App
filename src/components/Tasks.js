import React from 'react';
import PropTypes from 'prop-types';


const Tasks = (props) => (
	<div>
		<div onClick = {()=>props.removeTask(props.index)}className='remBtn'>X</div>
		<div className='taskName'>{props.tasks.task.name}</div>
		<div className='task'>{props.tasks.task.task}</div>
    </div>	
	);

Tasks.propTypes = {
	tasks: PropTypes.object.isRequired,


}  		

 export default Tasks;
