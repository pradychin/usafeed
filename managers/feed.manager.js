'use strict';
var dateTime = require('node-datetime'); 
// var dateTime = require('htmlparser2'); 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class FeedManager {


static  extractDescriptionTextFromHtml(html){
			// console.log("html : "+ html);
			//working
			// const dom = new JSDOM(html);
			// var desc = dom.window.document.querySelector("p").textContent
			// console.log(dom.window.document.querySelector("p").textContent); 
			// return desc;

			//working
			const window = (new JSDOM('', { runScripts: "outside-only" })).window;
			window.eval(html);
			var ch = window.document.body.children;
			var strContent = '';
			for (var index = 0; index < ch.length; index++) {
				var element = ch[index];
				strContent +=element.innerHTML;
				console.log("element : " + element.innerHTML );
			}
			return strContent;
}

static  extractImageUrlFromHtml(html){
	const frag = JSDOM.fragment(html);
	console.log("img : " + frag.querySelector("img").src) ;
	return frag.querySelector("img").src;
}


static convertFeedRecordToElasticsearch(record, id, source) {
//todo - mapping

		let timeInms = new Date().getTime();
		

		
		let elsType = {};

		if (id)
			elsType.uid = id;
			
			
		if (source)
			elsType.sourceId = source;
			
		

		if (record.title)
			elsType.title = record.title;
		if (record.description)
			elsType.description = record.description;
			// elsType.description = this.extractDescriptionTextFromHtml(record.description);

		if (record.image)
			elsType.image = record.image;	
		// else  if (record.content)
		// 	elsType.image = this.extractImageUrlFromHtml(record.content);	


		

		if (record.link)
			elsType.webPageUrl = record.link;
		if (record.author)
			elsType.author = record.author;
			
		// if (record.contents)
		// 	elsType.encodedContent = record.contents;		//todo  : contentbuffer.toString()
			
		if (record.content)
			elsType.content = record.content;	//todo: extractContentTextFromHtml(contentbuffer.toString());	

				

		elsType.createts = record.pubDate.getTime();
		elsType.updatets = timeInms;
		elsType.createdTimeInMillis = timeInms;
		elsType.displayCreateDate = timeInms;	//todo

		

		if (record.pubDate)
			elsType.pubDate = record.pubDate;	//todo

		if (record.categories)
			elsType.categories = record.categories;	

		elsType.displayPubDate = timeInms;	//todo



		if (record["media:content"]){
			elsType.mediumImageUrl = record["media:content"]["@"].url;
		}
			
		if (record["media:thumbnail"]){
			elsType.smallImageUrl = record["media:thumbnail"]["@"].url;
		}

		if (record["content:encoded"]){
			elsType.encodedContent = record["content:encoded"]["#"];
		}
		// console.log("FeedManager : elsType : "+ JSON.stringify(elsType));
		return elsType;
	}


		

}


// extractContentTextFromHtml
// extractDescriptionTextFromHtml
// extractImageUrlFromHtml

module.exports = FeedManager;