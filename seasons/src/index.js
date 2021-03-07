import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		// This is the only time we do direct assignments to this.state
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				//we called setState to update.
				//Never write this.state.lat = position.coords.latitude
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
		componentDidMount() {
			console.log ('My Component was rendered to the screen')
		}
		componentDidUpdate() {
			console.log('My Component was just updated - it rerendered!')
		}
	// React says we have to define render!
	render() {
		if (this.state.errorMessage && !this.state.lat)
		{
			return <div> Error: {this.state.errorMessage}</div>
		}
		if (!this.state.errorMessage && this.state.lat)
		{
			return <div> Lat: {this.state.lat}</div>
		}

		return <div> Loading!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
