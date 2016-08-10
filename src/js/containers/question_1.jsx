import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as TestActions from '../actions/TestActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Question1 extends Component {

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
        this.props.actions.setResults(this.state.inputVal, "SET_RES_QUEST_1");
		if (result === '4') {
          browserHistory.push("/question_21");
		} else {
		  browserHistory.push("/question_22");	
		}
	  }
}

  render() {

    return (
      <div className='question-container'>
        <p className="question-text">Do you have a propensity to take risks?</p>
        <form onChange={this.makeChoice.bind(this)}>
        <p className="answer-text">
          <input id="first" type="radio" name="answer" value="4" />
          <label htmlFor="first">Naturally, you can't achieve anything without risks</label>
        </p>
        <br/>
        <p className="answer-text">
          <input id="second" type="radio" name="answer" value="0"/>
          <label htmlFor="second">No, I prefer reliability</label>
        </p>
        </form>
		    <div className="button-container">
			  <button className="start-button" onClick={this.setResults.bind(this)}>Next</button>
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
)(Question1);
