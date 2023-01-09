function wind(){
$.getJSON
("http://api.weatherstack.com/current?access_key=be76c705a75c110a77e7f28d04d74908&query=Amsterdam",

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
