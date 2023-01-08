function wind(){
$.getJSON
("https://api.apixu.com/v1/current.json?key=be76c705a75c110a77e7f28d04d74908=Amsterdam",

	function(data) {
		console.log(data);

		var wind = data.current.wind_kph;
		var cond = data.current.condition.text;

		$("#windA").append("wind = "+wind+" km/h");
		$("#condTA").append(cond);
	}
	)
}
	setTimeout(wind, 500);
