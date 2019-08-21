import React, {Component} from 'react';
import Countries from './components/Countries';
import Form from './components/Form';
import './styles/styles.css';

class App extends Component {
	state = {
		countriesData: []
	};

	updateCountries = (data) => {
		this.setState({
			countriesData: data
		})
	};

	render() {
		return (
			<>
				<div className="text-center">
					<p>Using {this.props.title} by <a href="https://github.com/KsaniyaN" target="_blank" rel="noopener noreferrer">
						Xenia Novosilska</a><br/>
						Task: search countries using REST Countries API and show details<br/>
						Technologies used: React, Bootstrap, Flex grid</p>
					<Form updateCountries={this.updateCountries}/>
				</div>
				<Countries countriesData={this.state.countriesData}/>
			</>
		)
	};
}

export default App;