import React from 'react';
import Card from "./Card";

const Countries = (props) => {

	props.countriesData.sort((a, b) => (a.timezones[0] > b.timezones[0]) ? 1 : -1);

	return (
		<div className="cards">
			{props.countriesData.map(country =>
				<Card key={country.numericCode} {...country}/>
			)}
		</div>
	)
};

export default Countries;