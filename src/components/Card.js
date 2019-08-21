import React from 'react';
import utils from './utils';

class Card extends React.Component {
	render() {
		const country = this.props;
		const currentTime = (country.timezones[0].length > 3)
			? utils.calcTime(country.timezones[0])
			// some minor error handling
			: "no UTC zone data";

		return (
			<>
				<div className="card">
					<div>
						<img src={country.flag} alt="Country flag"/>
					</div>
					<div className="info">
						<h5 className="card-title">{country.name}</h5>
						<p className="text-muted">Capital: {country.capital}<br/>
							Currency: {country.currencies[0].name}<br/>
							Current time: {currentTime}</p>
					</div>
				</div>
			</>
		);
	}
}

export default Card;