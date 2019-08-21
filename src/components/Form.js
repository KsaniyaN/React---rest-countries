import React from 'react';

class Form extends React.Component {

	state = {
		countryName: '',
		baseUrl: 'https://restcountries.eu/rest/v2/name/'
	};

	handleChange(event) {
		event.preventDefault();

		const currentInputValue = event.target.value;

		this.setState({
			countryName: currentInputValue,
		});

		let url = this.state.baseUrl + currentInputValue;

		if (currentInputValue.length > 0) {
			this.fetchCountries(url);
		}
	}

	fetchCountries(url) {
		// GET request to the endpoint
		fetch(url)
		// parse the output to JSON
			.then(res => res.json())
			// set the value of our state to the output from the API call
			.then((data) => {
				//this.setState({countries: data})
				this.props.updateCountries(data);
			})
			// log any error we get to the console
			.catch(console.log)
	}

	render() {
		return (
			<div>
				<h3>Where do you want to go?</h3>
				<form className="search-countries">
					<div className="form-group">
						<input id="countryInput" className="form-control" type="text"
							// grab the input value when changed
							   onChange={this.handleChange.bind(this)}
							   value={this.state.countryName}

							   placeholder="Wonderland"
							   required/>
					</div>
				</form>
			</div>
		)
	}
}

export default Form;