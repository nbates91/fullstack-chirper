import React, { Component } from 'react';
import Timeline from './Timeline';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid bg-success text-white">
					<div className="container">
						<div className="text-center">
							<img src="" alt="Cartoon Bird" className="rounded" />
						</div>
						<br />
						<br />

						<h1 className="display-5">Welcome to Chirper!</h1>
						<br />
						<p className="lead text-center">
							Share your views with the world.. <br />
						</p>
						<p className="lead text-right">...even if the world could care less.</p>
					</div>
				</div>
				<Timeline />
			</React.Fragment>
		);
	}
}

export default App;
