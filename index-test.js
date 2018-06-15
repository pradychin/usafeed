var config = {
    "spectrumFeed": {
          "url": "http://spectrum.ieee.org/rss/fulltext",
          "src": "ieeespectrum"
    }
    ,
    "usaFeedService": {
      "url": "http://insight.ieeeusa.org/articles/feed/",        
      "src": "ieeeusainsights"
    }
    ,
    "transmitterFeed": {
      "url": "http://transmitter.ieee.org/feed/",        
      "src": "ieeetransmitter"
    }
    ,
    "spotlightFeedService": {
      "url": "http://sites.ieee.org/spotlight/feed/",        
      "src": "ieeespotlight"
    }
    ,
    "ieeetvFeedService": {
      "url": "https://ieeetv.ieee.org/rss/ieeetv-specials.rss",        
      "src": "ieeetvspecials"
    }
    ,
    "instituteFeedService": {
      "url": "http://feeds.feedburner.com/ieee/the-institute?format=xml",        
      "src": "ieeeinstitute"
    }
    // ,

    // "saFeedService": {
    //   "url": "http://standards.ieee.org/news/atom.xml",        
    //   "src": "ieeesanewsroom"
    // },      
    // "newsFeedService": {
    //   "url": "http://www.ieee.org/rss/index.html?feedId=News%20Release",        
    //   "src": "ieeenews"
    // }                            
}




// {
//     "ieeespectrum": {
//           "url": "http://spectrum.ieee.org/rss/fulltext"
//     }
//     ,
//     "ieeeusainsights": {
//       "url": "http://insight.ieeeusa.org/articles/feed/"
//     }
//     ,
//     "ieeetransmitter": {
//       "url": "http://transmitter.ieee.org/feed/"
//     }
//     ,
//     "ieeespotlight": {
//       "url": "http://sites.ieee.org/spotlight/feed/"
//     }
//     ,
//     "ieeetvspecials": {
//       "url": "https://ieeetv.ieee.org/rss/ieeetv-specials.rss"
//     }
//     ,
//     "ieeeinstitute": {
//       "url": "http://feeds.feedburner.com/ieee/the-institute?format=xml"
//     }
//     // ,

//     // "ieeesanewsroom": {
//     //   "url": "http://standards.ieee.org/news/atom.xml"
//     // },      
//     // "ieeenews": {
//     //   "url": "http://www.ieee.org/rss/index.html?feedId=News%20Release"
//     // }                            
// }



	var i= 0;

	for (var key in config) {
		i = i + 1;
		console.log("count url : " + i);
		// if (config.hasOwnProperty(key)) {
		// 	feedfrom = config[key];
		// 	console.log("feedfrom url : " + feedfrom.url);
		// 	httpOptions.uri = feedfrom.url;

        //     const feedparserOptions = {
        //     source: feedfrom.src
        //     };

		
		// 	var feed = FeedParser.parse(httpOptions,feedparserOptions);

		// 	feed.then( (items) => {

		// 		items.forEach(
		// 		function(element) 
		// 		{
		// 			let id =  crypto.createHash('md5').update( element.title+element.link).digest("hex") 
		// 			bulk.push({ index: { _id: id} })

		// 			bulk.push(FeedManager.convertFeedRecordToElasticsearch(element,id, feedparserOptions.source))
		// 		});

		// 		console.log("bulk : " + bulk.length/2);

		// 		esProvider.stream(bulk)
		// 		.then(response => {
		// 				if (process.env.DEBUG === 'true')
		// 					console.log('Success in es..', JSON.stringify(response, null, 2));
		// 		})
		// 		.catch(err => {
		// 				if (process.env.DEBUG === 'true')
		// 					console.log('Failure in es..', JSON.stringify(err, null, 2));
		// 		});	

		// 	}).catch(error => console.error('error: ', error));
		// }
		// bulk.length = 0;
	}






// var crypto = require('crypto');
// const FeedParser  = require("feedparser-promised");
// const FeedManager = require('./managers/feed.manager.js');
// const ElasticSearchProvider = require('./providers/elasticsearch.provider.js');
// const config = require('config');

// const esProvider = new ElasticSearchProvider();
// var bulk = [];


// const httpOptions = {
//     uri: '',
//     timeout: 100000,
//     gzip: true,
//     headers: {
//     'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0"
//     }
// };


// Promise.all([
//   fetchFeed(config["ieeespectrum"].url,"ieeespectrum"), 
//   fetchFeed(config["ieeeusainsights"].url,"ieeeusainsights")
// ])
// .then(function (result) {
//     console.log('result[0]..',  result[0]);
//     console.log('result[1]..',  result[1]);
// }).catch(function (error) {
//     console.log('Error result[0]..',  result[0]);
//     console.log('Error result[1]..',  result[1]);
// })

// function fetchFeed (url, feedFrom) {
//   return new Promise(function (resolve, reject) {
//     var feed = FeedParser.parse(url,feedFrom);

//     feed.then( (items) => {

//         items.forEach(function(element){
//             let id =  crypto.createHash('md5').update( element.title+element.link).digest("hex") 
//             bulk.push({ index: { _id: id} })
//             bulk.push(FeedManager.convertFeedRecordToElasticsearch(element,id, feedfrom.src))
//         });
//         console.log("bulk : " + bulk.length/2);
//         //elasticsearch insert....
//         esProvider.stream(bulk)
//         .then(response => {
//             if (process.env.DEBUG === 'true')
//                 console.log('Success in es..', JSON.stringify(response, null, 2));
//             //clear the array for next feed
//             bulk.length = 0;
//             resolve(feedFrom);
//         })
//         .catch(err => {
//             if (process.env.DEBUG === 'true')
//                 console.log('Failure in es..', JSON.stringify(err, null, 2));
//             //clear the array for next feed
//             bulk.length = 0;
//             rejects(feedFrom);
//         });	
//     }).catch(error => {
//         rejects(feedFrom);
//         console.error('error: ', error)});
//   })
// }



