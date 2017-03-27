import React from 'react';
import ShotButtons from './ShotButtons';

export default class Player extends React.Component {
  render() {
	return (
	  <tr>
		<td>{this.props.player.name}</td>
		<td>{this.props.player.number}</td>
		<td><ShotButtons /></td>
	  </tr>
	);
  }
}
