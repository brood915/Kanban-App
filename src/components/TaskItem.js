import React from 'react';
import PropTypes from 'prop-types';


function TaskItem(props) {
    return (
    	<div>
    		{props.children}
    	</div>
    );
}

TaskItem.propTypes = {

}

export default TaskItem;