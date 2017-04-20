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
      return(<div className ={styles.modal}>
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
          <form>
            <input type = 'text' placeholder="Name"></input>
            <input type = 'text' placeholder="Explanation"></input>
            <input type = 'text' placeholder="Task"></input>
            <Button bsStyle='primary' className={styles.modalBtn}>Add</Button>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle = 'primary' onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
	}
}

ModalContainer.propTypes = {

}

export default ModalContainer;