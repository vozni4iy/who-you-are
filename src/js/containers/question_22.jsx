import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as TestActions from '../actions/TestActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Question3 extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
      super(props);
      this.state = {
        inputVal: -1
      };
  }
  makeChoice(e){
    console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    })
  }
  setResults(){
	  var result = this.state.inputVal;
	  if (result !== -1) {
        this.props.actions.setResults(this.state.inputVal, "SET_RES_QUEST_22");
		if (result === '2') {
          browserHistory.push("/question_33");
		} else {
		  browserHistory.push("/question_34");	
		}
	 }	
}
  dropResults(){
	browserHistory.push("/question_1");  
  }
  render() {

    return (
      <div className='question-container'>
        <p className="question-text">Do you want to have much money?</p>
        <form onChange={this.makeChoice.bind(this)}>
        <p className="answer-text">
          <input id="first" type="radio" name="answer" value="2" />
          <label htmlFor="first">Of course. And I need to work hard to earn it.</label>
        </p>
        <br/>
        <p className="answer-text">
          <input id="second" type="radio" name="answer" value="0"/>
          <label htmlFor="second">Money is not a main goal for me</label>
        </p>
        </form>
        <div className="nav-container">
		  <div className="button-container">
		    <button className="start-button" onClick={this.dropResults.bind(this)}>Previous</button>
		  </div>
          <div className="button-container">
		    <button className="start-button" onClick={this.setResults.bind(this)}>Next</button>
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
)(Question3);
