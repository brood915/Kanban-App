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

      this.handleInput = this.handleInput.bind(this);
	}

	close() {
		this.setState({showModal: false});
    this.setState({input: []});
    this.setState({tasks: {}});
	}

  addTask () {
    this.props.dispatch(addTask(this.state.tasks));
    this.close();
    this.props.getState();

  }

	open() {
		this.setState({showModal: true});
	}

  addInput () {
    const input = this.state.input;
    const key = input.length;
    input.push(<input key = {key.toString()} name = {"task" + key} type = 'text' placeholder="Task"/>);
    this.setState({input});
  }

  removeInput () {
    const input = this.state.input;
    input.pop();
    this.setState({input});

  }

  handleInput (e) {
    const tasks = this.state.tasks;
    tasks[e.target.name]= e.target.value;
    this.setState({
      tasks
    }, () => console.log(this.state.tasks));
  }

	render() {
      return(<div className = "modal">
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
            <input onChange ={this.handleInput} type = 'text' name="name" placeholder="Name" />
            <input onChange ={this.handleInput} type = 'text' name="exp" placeholder="Explanation" />
            <input onChange ={this.handleInput} type = 'text' name="task" placeholder="Task" />
            {this.state.input.map(function(each){return each})}
            <section>
            <span className="modalBtn" onClick={this.addInput.bind(this)}>+</span>
            {this.state.input.length !== 0 &&
               <span className="modalBtn" onClick={this.removeInput.bind(this)}>-</span>
            }
            </section>
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

}


export default connect()(ModalContainer);