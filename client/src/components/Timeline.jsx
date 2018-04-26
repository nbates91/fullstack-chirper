import React, { Component } from 'react';
import InputForm from './Input';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirps: [
				{
					message: 'Thanks for using chirper!',
					id: 0,
				},
				{
					message: 'Type any message you like in the text box and hit Send!',
					id: 1,
				},
				{
					message:
						'While we believe in the value of free speech, try to keep it civil and avoid starting WWIII if you can help it. Thanks!',
					id: 2,
				},
			],
		};
	}

	handleMessage(value) {
		let newChirps = [...this.state.chirps];
		let newChirpObj = {
			message: value,
			id: newChirps.length,
		};
		newChirps.push(newChirpObj);
		this.setState({ chirps: newChirps });
	}
	render() {
		let chirps = this.state.chirps.map((chirp, index) => {
			return (
				<React.Fragment key={index}>
					<div className="card col-md-4" style={{ width: '18rem' }}>
						<div className="card-body">
							<h5 className="card-title">@Somebody</h5>
							<p className="card-text">{chirp.message}</p>
						</div>
					</div>
				</React.Fragment>
			);
		});
		return (
			<div>
				<InputForm
					message={value => {
						this.handleMessage(value);
					}}
				/>
				<div className="row">{chirps}</div>
			</div>
		);
	}
}
