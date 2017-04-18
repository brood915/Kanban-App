import React from 'react';
import PropTypes from 'prop-types';
import ModalButtons from '../components/ModalButtons';
import ModalForm from '../components/ModalForm';
import styles from '../style/main.scss';

function ModalContainer(props) {
    return (
    	<div className = {props.modal === 'on'? styles.modalOn : styles.modalOff}>
    	<ModalButtons />
    	<ModalForm />
    	</div>
    );
}

ModalContainer.propTypes = {

}

export default ModalContainer;