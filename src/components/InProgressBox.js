import React from 'react';
import PropTypes from 'prop-types';


function InProgressBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
    		{props.children}
    	</div>
    );
}

InProgressBox.propTypes = {

}

export default InProgressBox;