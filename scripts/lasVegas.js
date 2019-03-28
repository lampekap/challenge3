function wind(){
$.getJSON
("https://api.apixu.com/v1/current.json?key=54ed22965da24bf083a122538192703&q=las_vegas",

	function(data) {
		console.log(data);

		var wind = data.current.wind_kph;
		var cond = data.current.condition.text;

		$("#windL").append("wind = "+wind+" km/h");
		$("#condTL").append(cond);
	}
	)
}
	setTimeout(wind, 500);
