import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './Taskitem';
import styles from '../style/main.scss';

function TaskBox(props) {
	const border = {borderLeft: props.border}
    return (
    	<div className={styles.taskBox} style = {border}>
    		{props.children}
    	</div>
    );
}

TaskBox.propTypes = {

}

export default TaskBox;