import React from 'react';
import './ShotButtons.css';

class ShotButton extends React.Component {
  constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
	//e.preventDefault();		// do we need this?
	this.setState(prevState => {
	  const newSelected = ! prevState.selected;
	  console.log("click " + this.props.type + " -> " + newSelected);
	  this.props.onClick(this.props.type, newSelected);
	  return { "selected": newSelected };
	});
  }

  render() {
	const className = this.props.selected ? "selected" : "unselected";
	return (
	  <button className={className} onClick={this.handleClick}>{this.props.type}</button>
	);
  }
}

export default class ShotButtons extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  "types": [ "2", "1", "3" ],
	  "pick": "none"
	};
	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type, selected) {
	console.log("parent " + type + " = " + selected);
	this.setState({ pick: selected ? type : "none" });
  }

  render() {
	console.log("render " + this.state.pick);
	const buildButton = (type) => {
	  return (
		<ShotButton key={type} type={type} selected={this.state.pick===type} onClick={this.handleClick} />
	  );
	};
	console.log("buttons " + this.state.types);
	return(
	  <div className="ShotButtons-group">
		{this.state.types.map(buildButton)}
	  </div>
	);
  }
}
