import React from 'react';
import PropTypes from 'prop-types';


const Tasks = (props) => (
	<div>
		<div className='remBtn'>X</div>
		<div className='taskName'>{props.tasks.task.name}</div>
		<div className='task'>{props.tasks.task.task}</div>
    </div>	
	);

Tasks.propTypes = {

}  		

 export default Tasks;
