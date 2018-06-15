var http = require('http');
var htmlparser = require('htmlparser2');

var url = 'http://spectrum.ieee.org/rss/fulltext'

http.get(url, function(response) {
  parseResponse(response);
})

var parseResponse = function(response) {
  var data = "";
  response.on('data', function(chunk) {
    data += chunk;
  });
  var descTtext = "";
  var tags = [];
  var tagsCount = {};
  var tagsWithCount = [];
  response.on('end', function(chunk) {
    var parsedData = new htmlparser.Parser({

	ontext: function(text){
         descTtext += text;
	}

   }, {decodeEntities: true});
   parsedData.write(data);
   parsedData.end();
   console.log("descTtext : "+ descTtext);
  });
}