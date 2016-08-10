import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  
  render() {
    return (
	  
      <div className="page-container"> 
	    {this.props.children}
		 <div className="copyright">@Igor Skakun, 2016</div>
	  </div>
	 
    );
  }
}
