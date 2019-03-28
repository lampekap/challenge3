function wind(){
$.getJSON
("http://api.apixu.com/v1/current.json?key=54ed22965da24bf083a122538192703&q=Amsterdam",

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
