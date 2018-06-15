'use strict';
// const AWS = require('aws-sdk');

class ElasticSearchProvider {

	// constructor() {
	// 	const credentials = new AWS.EnvironmentCredentials('AWS');
	// 	this.client = require('elasticsearch').Client({
	// 		hosts: process.env.ES_HOST,
	// 		connectionClass: require('http-aws-es'),
	// 		amazonES: { region: process.env.AWS_REGION, credentials: credentials }
	// 	});
	// }

	constructor() {
		this.client = require('elasticsearch').Client({
				host: 'localhost:9200',
				log: 'trace'
				});
	}	

	stream(body) {
		return new Promise((resolve, reject) => {
			this.client.bulk({
				index: "ieeefeeds",
				type: "ieeefeed",
				body: body
			}).then(res => resolve(res), err => reject(err));
		});
	}

}

module.exports = ElasticSearchProvider;