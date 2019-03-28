
	$.getJSON
("https://api.exchangeratesapi.io/latest",

	function(data) {
		console.log(data);

		var geldS = data.rates.SGD;
		var geldL = data.rates.USD;
		var geldA = 1;

		$("#geldS").append("1 EUR = "+geldS+" SGD");
		$("#geldL").append("1 EUR = "+geldL+" USD");
		$("#geldA").append("1 EUR = "+geldA+" EUR");
	}
	)
