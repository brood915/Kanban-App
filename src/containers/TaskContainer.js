import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../components/TaskBox';
import { connect } from 'react-redux';

function TaskContainer(props) {
    return (
    	<div className="taskContainer">
    	<TaskBox border="#47B8E0 7px solid"><h4><span className="arrowDown"></span>Ready</h4></TaskBox>
    	<TaskBox border="#fbd14b 7px solid"><h4><span className="arrowDown"></span>In-Progress</h4></TaskBox>
    	<TaskBox border="#FA5D29 7px solid"><h4><span className="arrowDown"></span>Done</h4></TaskBox>
    	</div>
    );
}

TaskContainer.propTypes = {

}

const mapDispatchToProps = (dispatch) => {
   return {

   }
};

const mapStateToProps = (state) => {
   return {

   };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);