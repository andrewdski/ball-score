import React from 'react';
import './ShotButtons.css';

class ShotButton extends React.Component {
  constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = { "state": "idle" };
  }
  handleClick(e) {
	const nextState = {
	  "idle": "attempted",
	  "attempted": "made",
	  "made": "idle"
	};
	e.preventDefault();
	this.setState(prevState => {
	  console.log("click " + prevState.state + " -> " + nextState[prevState.state] );
	  return { "state": nextState[prevState.state] };
	});
  }

  render() {
	console.log("render " + this.state.state);
	return (
	  <button className={this.state.state} onClick={this.handleClick}>{this.props.type}</button>
	);
  }
}

export default class ShotButtons extends React.Component {
  render() {
	return (
	  <div className="ShotButtons-group">
		<ShotButton type="2" />
		<ShotButton type="3" />
		<ShotButton type="1" />
	  </div>
	);
  }
}
