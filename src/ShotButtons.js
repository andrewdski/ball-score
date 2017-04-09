import React from 'react';
import './ShotButtons.css';

class ShotButton extends React.Component {
  constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
	//e.preventDefault();		// do we need this?
	this.props.onClick(this.props.type);
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
	this.state = { "pick": "none" };
	this.handleClick = this.handleClick.bind(this);
	this.handleBasket = this.handleBasket.bind(this);
	this.handleMiss = this.handleMiss.bind(this);
  }

  handleClick(type) {
	this.setState(prevState => {
	  return { "pick": (prevState.pick === type ? "none" : type) };
	});
  }

  handleBasket() {
	if (this.state.pick !== "none") {
	  this.props.handleBasket(this.state.pick);
	}
	this.setState({ "pick": "none" });
  }

  handleMiss() {
	if (this.state.pick !== "none") {
	  this.props.handleMiss(this.state.pick);
	}
	this.setState({ "pick": "none" });
  }

  render() {
	const buildButton = (type) => {
	  return (
		<ShotButton key={type} type={type} selected={this.state.pick===type} onClick={this.handleClick} />
	  );
	};
	return(
	  <div className="ShotButtons-group">
		{this.props.types.map(buildButton)}
		<button onClick={this.handleBasket}>made</button>
		<button onClick={this.handleMiss}>missed</button>
	  </div>
	);
  }
}
