import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styles from '../style/main.scss';

function TaskButton(props) {
    return (
    	<div className ={styles.button}>
    		<Button bsStyle="primary">Add</Button>
    	</div>
    );
}

TaskButton.propTypes = {

}

export default TaskButton;