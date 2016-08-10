import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as TestActions from '../actions/TestActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Question6 extends Component {

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
  moveToConclusion() {
	  if (this.state.inputVal !== -1) {
        this.props.actions.setResults(this.state.inputVal, "SET_RES_QUEST_34");
        browserHistory.push("/conclusion");
	  }
  }
  
  dropResults(){
	browserHistory.push("/question_22");  
  }
  
  render () {
    return (
      <div className='question-container'>
      <p className="question-text">Ok, what is the main factor that motivates you during the work?</p>
      <form onChange={this.makeChoice.bind(this)}>
      <p className="answer-text">
        <input id="first" type="radio" name="answer" value="1" />
        <label htmlFor="first">I love my team, I am happy to work with them</label>
      </p>
      <br/>
      <p className="answer-text">
        <input id="second" type="radio" name="answer" value="0"/>
        <label htmlFor="second">Usually I am working just to achieve my own goals, 
		it is not important for me who with I am working near</label>
      </p>
      </form>
        <div className="nav-container">
		  <div className="button-container">
		    <button className="start-button" onClick={this.dropResults.bind(this)}>Previous</button>
		  </div>
          <div className="button-container">
		    <button className="start-button" onClick={this.moveToConclusion.bind(this)}>Show Results</button>
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
)(Question6);
