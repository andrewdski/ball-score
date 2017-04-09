import React from 'react';
import Player from './Player';
import './Team.css';

export default class Team extends React.Component {
  render() {
	function build_player(p) {
	  return <Player key={p.number} player={p} types={["2", "1", "3"]} />;
	}
	return(
	  <table className="Team">
		<thead>
		  <tr><th>Name</th><th>Number</th><th>Add Shot</th><th>FGs</th><th>3pt</th><th>FTs</th></tr>
		</thead>
		<tbody>
		  {this.props.players.map(build_player)}
		</tbody>
	  </table>
	);
  }
};
