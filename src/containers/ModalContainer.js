import React from 'react';
import PropTypes from 'prop-types';
import ModalButtons from '../components/ModalButtons';
import ModalForm from '../components/ModalForm';

function ModalContainer(props) {
    return (
    	<div>
    	<ModalButtons />
    	<ModalForm />
    	</div>
    );
}

ModalContainer.propTypes = {

}

export default ModalContainer;