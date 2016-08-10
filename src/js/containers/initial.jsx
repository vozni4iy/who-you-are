import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
  class Initial extends Component {
    moveToQuestion1() {
      browserHistory.push("/question_1");
    }
  render () {
    return (
      <div className = "initial-container">
        <div className="intro">
          <p className="content-text">Who you are in a wild world of business?</p>
          <p className="content-text">Pass a simple test to understand your role.</p>
        </div>
        <div className="button-container" onClick={this.moveToQuestion1.bind(this)}><button className="start-button">Get started</button></div>
      </div>
    );
  }
}

export default Initial;
