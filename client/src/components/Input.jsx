import React, { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}

	handleChange(value) {
		this.setState({ value });
	}
	handleClick(message) {
		this.props.message(message);
		this.setState({ value: '' });
	}
	render() {
		return (
			<React.Fragment>
				<div className="col-sm-6 input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text bg-white text-success" id="basic-addon1">
							@
						</span>
					</div>
					<input
						type="text"
						className="form-control text-success"
						placeholder="Tag a friend!"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="input-group col-sm-6">
					<div className="input-group-prepend" />
					<textarea
						value={this.state.value}
						onChange={e => {
							this.handleChange(e.target.value);
						}}
						className="form-control bg-white text-success"
						aria-label="With textarea"
						placeholder="Say Something!"
					/>
					<button
						type="button"
						onClick={() => {
							this.handleClick(this.state.value);
						}}
						className="btn btn-outline-success"
					>
						Send
					</button>
				</div>
			</React.Fragment>
		);
	}
}
