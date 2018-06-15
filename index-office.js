var myProductName = "usafeed"; var myVersion = "1.0.0";

const request = require ("request");
var crypto = require('crypto');
const FeedParser  = require("feedparser-promised") 
const FeedManager = require('./managers/feed.manager.js');
const ElasticSearchProvider = require('./providers/elasticsearch.provider.js');
var bulk = [];

const urlTestFeed = "http://insight.ieeeusa.org/articles/feed/";

const httpOptions = {
	uri: 'http://insight.ieeeusa.org/articles/feed/',
	timeout: 3000,
	gzip: true
};

exports.handler = (event, context, callback) => {
    function generateResponse(statusCode, body) {
		return {
			statusCode: statusCode,
			body: body,
			headers: { 'Content-Type': 'application/json' }
		};
	}	
	
};
///////////////////////////

// /* ES5, using Bluebird */
// var isMomHappy = true;

// // Promise
// var bulkData = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
// 				bulk.push({ index: { _id: "aa_21"} });
// 				bulk.push({ "sourceId" : "sb:localmaching" });

// 				bulk.push({ index: { _id: "aa_31"} });
// 				bulk.push({ "sourceId" : "sb:localmaching" });

// 				bulk.push({ index: { _id: "aa_41"} });
// 				bulk.push({ "sourceId" : "sb:localmaching" });	

//             	resolve(bulk);
//         } else {
//             var reason = new Error(' is not happy');
//             reject(reason);
//         }

//     }
// );

// // call our promise
// var askMom = function () {
//     bulkData
//         .then(function (fulfilled) {
// 			esProvider.stream(bulk)
// 					.then(response => {
// 						if (process.env.DEBUG === 'true')
// 							console.log('Success in es..', JSON.stringify(response, null, 2));
// 					})
// 					.catch(err => {
// 						if (process.env.DEBUG === 'true')
// 							console.log('Failure in es..', JSON.stringify(err, null, 2));
// 					})			
//         })
//         .catch(function (error) {
//             // ops, mom don't buy it
//             console.log(error.message);
//         });
// }

// askMom();
///////////////////







const esProvider = new ElasticSearchProvider();


// bulk.push({ index: { _id: "aa_11"} });
// bulk.push({ "sourceId" : "sb:localmaching" });
function  prepareESInput(element, i, array) {
	var indexedItem =[];
	// console.log('a[' + i + '] = ' + element);
	// bulk.push({ index: { _id: i } });
	let id =  crypto.createHash('md5').update( element.title+element.link).digest("hex") ;
	indexedItem.push({ index: { _id: id} });
	indexedItem.push(FeedManager.convertFeedRecordToElasticsearch(element,id, "ieeeusainsights"));	

	// bulk.push({ index: { _id: "aa_11"} });
	// bulk.push({ "sourceId" : "sb:localmaching" });
	return indexedItem;
	
}

function printArray(){
	console.log("printArray : " + bulk.length);
		for (var i = 0; i < bulk.length; i++) {
			console.log ("Item #" +  ": " + JSON.stringify(bulk[i]) + ".\n");
		}	
}




FeedParser.parse(httpOptions).then( (items) => {
	// items.forEach(prepareESInput);


for (var i = 0; i < items.length; i++) {
	let id =  crypto.createHash('md5').update( items[i].title+items[i].link).digest("hex") ;
	bulk.push({ index: { _id: id} });
	bulk.push(FeedManager.convertFeedRecordToElasticsearch(items[i],id, "ieeeusainsights"));	
}

printArray();
})
.then(


// printArray()


	// esProvider.stream(bulk)
	// 	.then(response => {
	// 		// if (process.env.DEBUG === 'true')
	// 			console.log('Success in es..', JSON.stringify(response, null, 2));
	// 	})
	// 	.catch(err => {
	// 		// if (process.env.DEBUG === 'true')
	// 			console.log('Failure in es..', JSON.stringify(err, null, 2));
	// 	})			
)	.catch(error => console.error('error: ', error));	
// callback(null, `Successfully processed ${event.Records.length} records.`);




