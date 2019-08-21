import React from 'react';

class Card extends React.Component {
	render() {
		const country = this.props;
		const currentUTCTimezone = country.timezones[0];

		// const currentTime = new Date.parse(currentUTCTimezone);
		// console.log(currentTime);


		//console.log(currentUTCTimezone);

		// const getCurrentTime = (currentUTCTimezone) => {
		// 	return console.log(currentUTCTimezone);
		// };

		// const currentTime = getCurrentTime(currentUTCTimezone);

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
							Current time: {currentUTCTimezone}</p>
					</div>
				</div>
			</>
		);
	}
}

export default Card;