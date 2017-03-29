var http = require('http');
var situs = process.argv[2];
var rawHeaders = '';

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

var request = http.get(situs, function(response){
	rawHeaders = response.rawHeaders;
if(rawHeaders.length > 0){
	console.log('The result is HTML');
	response.on('data', function (chunk) {
		var chunk = (''+chunk).split('\n');
		var title = chunk.filter(function(val){
			var req = /title/gi;
			return val.match(req);
		}).join('');
		console.log('The title is '+title);
	});
} else {
            console.log('The result is not HTML');
        }
    });