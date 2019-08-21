import React from 'react';

class Card extends React.Component {
	render() {
		const country = this.props;

		//----- converting UTC timezone stamp to hours:minutes
		const utcStr = country.timezones[0];

		const hoursStr = utcStr.substr(4, 2);
		const hoursOffset = parseInt(hoursStr);

		const minutesStr = utcStr.substr(7, 2);
		const minutesOffset = parseInt(minutesStr);

		const offsetStr = utcStr[3] + hoursOffset + "." + minutesOffset;
		const offset = parseFloat(offsetStr);

		const calcTime = (offset) => {
			const d = new Date(); // current local time

			// convert to msec
			// subtract local time zone offset, get UTC time in msec
			const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

			// create new Date object for different country
			const nd = new Date(utc + (3600000 * offset));

			// return time as a string
			return nd.toLocaleString();
		};

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
							Current time: {calcTime(offset)}</p>
					</div>
				</div>
			</>
		);
	}
}

export default Card;