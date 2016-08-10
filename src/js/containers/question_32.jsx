import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as TestActions from '../actions/TestActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Question5 extends Component {

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
	  if (this.state.inputVal !== -1) {
        this.props.actions.setResults(this.state.inputVal, "SET_RES_QUEST_32");
        browserHistory.push("/conclusion");
	  }
}

  dropResults(){
	browserHistory.push("/question_21");  
  }
  
  render() {

    return (
      <div className='question-container'>
        <p className="question-text">What has more matter for you: achievements or freedom?</p>
        <form onChange={this.makeChoice.bind(this)}>
        <p className="answer-text">
          <input id="first" type="radio" name="answer" value="1" />
          <label htmlFor="first">To achieve a lot you have to sacrifice a lot</label>
        </p>
        <br/>
        <p className="answer-text">
          <input id="second" type="radio" name="answer" value="0"/>
          <label htmlFor="second">Freedom is much more valuable than any money or power</label>
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
)(Question5);
