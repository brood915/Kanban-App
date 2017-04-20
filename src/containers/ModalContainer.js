import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/main.scss';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showModal: false
    	}
	}

	close() {
		this.setState({showModal: false});
	}

	open() {
		this.setState({showModal: true});
	}

	render() {
      return(<div className ={styles.button}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add your task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>test</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
	}
}

ModalContainer.propTypes = {

}

export default ModalContainer;