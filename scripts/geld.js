
	$.getJSON
("http://apilayer.net/api/live?access_key=a785680e2401cae9a911ed37c0785bf7&currencies=USD,EUR,SGD&format=1",

	function(data) {
		console.log(data);

		var geldS = data.quotes.USDSGD;
		var geldL = data.quotes.USDUSD;
		var geldA = data.quotes.USDEUR;

		$("#geldS").append("1 USD = "+geldS+" SGD");
		$("#geldL").append("1 USD = "+geldL+" USD");
		$("#geldA").append("1 USD = "+geldA+" EUR");
	}
	)
