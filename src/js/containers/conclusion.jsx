import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as TestActions from '../actions/TestActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Conclusion extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    all_result: PropTypes.any
  };
  constructor(props) {
    super(props);
    this.state = {
      res: ''
    };
    this.props.actions.setFinalRes("SET_FINAL_RES");
  }
  
  setResults(){
	    this.props.actions.setResults(0, "SET_RES_QUEST_1");
		this.props.actions.setResults(0, "SET_RES_QUEST_21");
		this.props.actions.setResults(0, "SET_RES_QUEST_22");
		this.props.actions.setResults(0, "SET_RES_QUEST_31");
		this.props.actions.setResults(0, "SET_RES_QUEST_32");
		this.props.actions.setResults(0, "SET_RES_QUEST_33");
		this.props.actions.setResults(0, "SET_RES_QUEST_34");
	    browserHistory.push("/");
	  }
	  
  render () {
	  
	var imgSource =  "../images/" + this.props.answer.image;
		
    return (
      <div className='conclusion'>
	    <div className='imgBox'>
		  <img src={imgSource}/>
	    </div>  
		<div className ='finalText'>
          <p className="content-text">{this.props.answer.all_result}</p>
		  <div className="button-container">
		    <button className="start-button" onClick={this.setResults.bind(this)}>Finish</button>
	      </div>
		</div>  
      </div>
	);
  }
}
function mapStateToProps(state) {
  return {
    answer: state.answer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TestActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conclusion);
