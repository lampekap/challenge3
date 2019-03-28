function wind(){
$.getJSON
("https://api.apixu.com/v1/current.json?key=54ed22965da24bf083a122538192703&q=singapore",

	function(data) {
		console.log(data);

		var wind = data.current.wind_kph;
		var cond = data.current.condition.text;

		$("#windS").append("wind = "+wind+" km/h");
		$("#condTS").append(cond);
	}
	)
}
	setTimeout(wind, 500);
