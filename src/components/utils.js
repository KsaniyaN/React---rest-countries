const utils = {

	//----- converting UTC timezone stamp to hours:minutes
	calcTime: (utcStr) => {
		const hoursStr = utcStr.substr(4, 2);
		const hoursOffset = parseInt(hoursStr);

		const minutesStr = utcStr.substr(7, 2);
		const minutesOffset = parseInt(minutesStr);
		const minutesToHr = parseFloat(minutesOffset / 60);

		const offsetStr = hoursOffset + minutesToHr;
		const offset = parseFloat(offsetStr);

		const d = new Date(); // current local time

		// subtract local time zone offset, get UTC time in msec
		const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

		// create new Date object for different country
		const nd = (utcStr[3] === "+")
			? new Date(utc + (3600000 * offset))
			: new Date(utc - (3600000 * offset));

		// return time as a string
		return nd.toLocaleString();
	}
};

export default utils;