import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Update extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			user: '',
			id: '',
		};
	}
	componentDidMount() {
		fetch(`/api/chirps/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(chirp => {
				this.setState({ message: chirp.message, user: chirp.user, id: chirp.id });
			});
	}
	handleMessageVal(value) {
		this.setState({ message: value });
	}
	handlePut() {
		fetch(`/api/chirps/${this.state.id}`, {
			method: 'PUT',
			body: JSON.stringify({
				user: this.state.user,
				message: this.state.message,
				id: this.state.id,
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then(this.props.history.replace(`/${this.state.id}`))
			.then(response => console.log('Success:', response))
			.catch(error => console.error('Error:', error));
	}
	render() {
		return (
			<React.Fragment>
				<div className="text-center">
					<Link className="homeBtn btn btn-success m-3 " to="/">
						Home
					</Link>
				</div>
				<div className="d-flex justify-content-center">
					<div className="card col-md-4" style={{ width: '40rem' }}>
						<div className="card-body">
							<button
								onClick={() => {
									this.handlePut();
								}}
								className="putBtn btn btn-success"
							>
								Save changes
							</button>
							<h5 className="card-title">@{this.state.user}</h5>
							{/* <textarea className="card-text">{this.state.message}</p> */}
							<textarea
								onChange={e => {
									this.handleMessageVal(e.target.value);
								}}
								className="form-control bg-white text-success"
								aria-label="With textarea"
								value={`${this.state.message}`}
								style={{ border: 'solid', borderColor: 'darkgreen' }}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
