import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showModal: false,
      input: [],
      tasks: {}
    	}
	}

	close() {
		this.setState({showModal: false});
    this.setState({input: []});
    this.setState({tasks: {}});
	}

  addTask () {
    this.props.dispatch(addTask(this.state.tasks));
    this.close();
  }

	open() {
		this.setState({showModal: true});
	}

  handleInput (e) {
    const tasks = this.state.tasks;
    tasks[e.target.name]= e.target.value;
    this.setState({
      tasks
    });
  }

	render() {
      return(<div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
          className = "openBtn"
        >
          Add
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add your task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <input onChange ={this.handleInput.bind(this)} type = 'text' name="name" placeholder="Name" required/>
            <input onChange ={this.handleInput.bind(this)} type = 'text' name="task" placeholder="Task" required/>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.addTask.bind(this)}>Add</Button>
            <Button bsStyle='primary' onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
	}
}

ModalContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
   return {
    tasks: state.tasks.tasks
   };
};

export default connect(mapStateToProps)(ModalContainer)