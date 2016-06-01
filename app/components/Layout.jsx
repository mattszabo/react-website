import React from 'react';

import NavBar from './NavBar/NavBar';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}
