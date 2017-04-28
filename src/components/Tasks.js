import React from 'react';
import PropTypes from 'prop-types';


const Tasks = (props) => (
	<div className="tasks">
		<div>X</div>
		<div>{props.tasks.task.name}</div>
		<div>{props.tasks.task.task}</div>
    </div>	
	);

Tasks.propTypes = {

}  		

 export default Tasks;
