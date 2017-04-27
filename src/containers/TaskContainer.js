import React from 'react';
import PropTypes from 'prop-types';
import TodoBox from '../components/TodoBox';
import InProgressBox from '../components/InProgressBox';
import CompletedBox from '../components/CompletedBox';
import { connect } from 'react-redux';

const TaskContainer = () => 
   (
    	<div className="taskContainer">
    	<TodoBox border="#47B8E0 7px solid"><h4><span className="arrowDown"></span>Ready</h4></TodoBox>
    	<InProgressBox border="#fbd14b 7px solid"><h4><span className="arrowDown"></span>In-Progress</h4></InProgressBox>
    	<CompletedBox border="#FA5D29 7px solid"><h4><span className="arrowDown"></span>Done</h4></CompletedBox>
    	</div>
    );



const getStage = (tasks, filter) => {
  switch (filter) {
    case 'TO_DO':
      return tasks
    case 'IN_PROGRESS':
      return tasks.filter(t => t.completed)
    case 'COMPLETED':
      return tasks.filter(t => !t.completed)
  }
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