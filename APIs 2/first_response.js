const request = require('request');

request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
	// eval(require('locus')); / for debugging 
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log(parsedData[0].id);
	}
  
});