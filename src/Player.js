import React from 'react';
import ShotButtons from './ShotButtons';
import update from 'immutability-helper';

function Scoring({made, attempted}) {
  return <td>{made}/{attempted}</td>;
}

export default class Player extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  "attempted": this.props.types.reduce((prev, curr) => { prev[curr] = 0; return prev; }, {}),
	  "made": this.props.types.reduce((prev, curr) => { prev[curr] = 0; return prev; }, {})
	};

	this.handleMadeShot = this.handleMadeShot.bind(this);
	this.handleMissedShot = this.handleMissedShot.bind(this);
  }

  handleMadeShot(type) {
	console.log("made " + type);
	this.setState(prevState => update(prevState, {
	  made: { [type]: { $apply: x => x+1 } },
	  attempted: { [type]: { $apply: x => x+1 } }
	}));
  }

  handleMissedShot(type) {
	console.log("miss " + type);
	this.setState(prevState => update(prevState, {
	  attempted: { [type]: { $apply: x => x+1 } }
	}));
  }

  render() {
	return (
	  <tr>
		<td>{this.props.player.name}</td>
		<td>{this.props.player.number}</td>
		<td><ShotButtons types={this.props.types} handleBasket={this.handleMadeShot} handleMiss={this.handleMissedShot}/></td>
		<td><Scoring made={this.state.made["2"]} attempted={this.state.attempted["2"]} /></td>
		<td><Scoring made={this.state.made["3"]} attempted={this.state.attempted["3"]} /></td>
		<td><Scoring made={this.state.made["1"]} attempted={this.state.attempted["1"]} /></td>
	  </tr>
	);
  }
}
