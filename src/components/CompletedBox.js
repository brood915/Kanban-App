import React from 'react';
import PropTypes from 'prop-types';

function CompletedBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className="taskBox" style = {border}>
    		{props.children}
    	</div>
    );
}

CompletedBox.propTypes = {

}

export default CompletedBox;