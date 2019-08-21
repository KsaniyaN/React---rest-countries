import React from 'react';
import Card from "./Card";

const Countries = (props) => {
	return (
		<div className="cards">
			{props.countriesData.map(country =>
				<Card key={country.numericCode} {...country}/>
			)}
		</div>
	)
};

export default Countries;