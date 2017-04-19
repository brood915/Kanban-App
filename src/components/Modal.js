import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/main.scss';

function ModalContainer(props) {
    return (
    	<div className = {props.modal === 'on'? styles.modalOn : styles.modalOff}>
    	</div>
    );
}

ModalContainer.propTypes = {

}

export default ModalContainer;