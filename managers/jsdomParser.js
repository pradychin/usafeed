const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var request = require('request');

const window = (new JSDOM('', { runScripts: "outside-only" })).window;

var html = `
html : <?xml version="1.0" encoding="UTF-8"?><html>
<body>IEEE.tv programs cover indoor farms and precision agriculture<figure>
<img src="http://theinstitute.ieee.org/image/MTc1MDk0.jpeg"/>
</figure>
<div>
<p>The following videos show members and others who are developing technology to boost food production, improve agricultural efficiency, and lower the cost of feeding livestock.</p>
<ul class="listicle">
<li>
<iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/130496/620" width="620" frameborder="1" height="346"/>
<h3 class="listicle-item-hed">
<strong>INDOOR VERTICAL FARMS</strong>
</h3> In this video, coproduced by <em>The Institute</em>, you can get a look inside <a shape="rect" href="http://theinstitute.ieee.org/technology-topics/life-sciences/indoor-farms-could-revolutionize-agriculture">AeroFarms</a> of Newark, N.J. The indoor farm is considered to be the largest in the world based on how much it can grow, harvesting nearly 1 million kilograms of leafy greens and herbs per year. The facility relies on LED lamps instead of sunlight, and uses about 95 percent less water than field farms. The crops require no pesticides or soil.</li>
<li>
<iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/130671/620" width="620" frameborder="1" height="346"/>
<h3 class="listicle-item-hed">
<strong>SENSOR APPLICATIONS FOR AGRICULTURE</strong>
</h3>
<p>Senior Member Gourab Sen Gupta presents three cases of how technology is used for farming, including embedding sensors to monitor the health of plants and vision sensing to measure cattle’s physical condition. Gupta is an associate professor at the School of Engineering and Advanced Technology at Massey University, in New Zealand, and a guest editor of the <a shape="rect" href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7361">
<em>IEEE Sensors Journal</em>
</a>.</p>
</li>
<li>
<iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/131894/620" width="620" frameborder="1" height="346"/>
<h3 class="listicle-item-hed">
<strong>COMPUTER VISION AND ROBOTICS FOR FARMS</strong>
</h3>
<p>Jim Ostrowski, vice president of engineering at Blue River Technology, in Sunnyvale, Calif., discusses the need for farms to move into the digital age because of the shortage of workers. His company develops smart agriculture equipment including automated machines for precision farming, such as for spraying herbicide only on the weeds and not the crops. Ostrowski also describes several of Blue River’s technologies and how they are being used today.</p>
</li>
<li>
<iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/131270/620" width="620" frameborder="1" height="346"/>
<h3 class="listicle-item-hed">
<strong>FEEDING FARM ANIMALS</strong>
</h3>
<p>In this video from <a shape="rect" href="https://entrepreneurship.ieee.org/">IEEE Entrepreneurship</a>, you can meet Jason Force, chief executive of Iron Goat, a robotics company in Fairfax, Va. Force explains how his machine bales hay into a small cube—about the portion that will feed one farm animal. The animals eat 95 percent of the cubed hay; typically on farms, animals eat about half the hay they’re fed, Force says. The current way of baling hay requires significant resources including specialized equipment and manual labor. Iron Goat’s system produces feed at lower costs, and the equipment can be rented out.</p>
</li>
</ul>
<p/>
<p/>
</div>
</body>
</html>;`

const frag = JSDOM.fragment(html);

frag.childNodes.length === 2;
console.log("img : " + frag.querySelector("img").src) ;
// etc.

// window.eval(html);
// const frag = JSDOM.fragment(`<html>
// <body>IEEE.tv programs cover indoor farms and precision agriculture<figure>
// <img src="http://theinstitute.ieee.org/image/MTc1MDk0.jpeg"/>
// </figure>
// <div>
// <p>The following videos show members and others who are developing technology to boost food production, improve agricultural efficiency, and lower the cost of feeding livestock.</p>
// <ul class="listicle">
// <li>
// <iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/130496/620" width="620" frameborder="1" height="346"/>
// <h3 class="listicle-item-hed">
// <strong>INDOOR VERTICAL FARMS</strong>
// </h3> In this video, coproduced by <em>The Institute</em>, you can get a look inside <a shape="rect" href="http://theinstitute.ieee.org/technology-topics/life-sciences/indoor-farms-could-revolutionize-agriculture">AeroFarms</a> of Newark, N.J. The indoor farm is considered to be the largest in the world based on how much it can grow, harvesting nearly 1 million kilograms of leafy greens and herbs per year. The facility relies on LED lamps instead of sunlight, and uses about 95 percent less water than field farms. The crops require no pesticides or soil.</li>
// <li>
// <iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/130671/620" width="620" frameborder="1" height="346"/>
// <h3 class="listicle-item-hed">
// <strong>SENSOR APPLICATIONS FOR AGRICULTURE</strong>
// </h3>
// <p>Senior Member Gourab Sen Gupta presents three cases of how technology is used for farming, including embedding sensors to monitor the health of plants and vision sensing to measure cattle’s physical condition. Gupta is an associate professor at the School of Engineering and Advanced Technology at Massey University, in New Zealand, and a guest editor of the <a shape="rect" href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7361">
// <em>IEEE Sensors Journal</em>
// </a>.</p>
// </li>
// <li>
// <iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/131894/620" width="620" frameborder="1" height="346"/>
// <h3 class="listicle-item-hed">
// <strong>COMPUTER VISION AND ROBOTICS FOR FARMS</strong>
// </h3>
// <p>Jim Ostrowski, vice president of engineering at Blue River Technology, in Sunnyvale, Calif., discusses the need for farms to move into the digital age because of the shortage of workers. His company develops smart agriculture equipment including automated machines for precision farming, such as for spraying herbicide only on the weeds and not the crops. Ostrowski also describes several of Blue River’s technologies and how they are being used today.</p>
// </li>
// <li>
// <iframe scrolling="no" allowfullscreen="true" src="//ieeetv.ieee.org/player/embed_play/131270/620" width="620" frameborder="1" height="346"/>
// <h3 class="listicle-item-hed">
// <strong>FEEDING FARM ANIMALS</strong>
// </h3>
// <p>In this video from <a shape="rect" href="https://entrepreneurship.ieee.org/">IEEE Entrepreneurship</a>, you can meet Jason Force, chief executive of Iron Goat, a robotics company in Fairfax, Va. Force explains how his machine bales hay into a small cube—about the portion that will feed one farm animal. The animals eat 95 percent of the cubed hay; typically on farms, animals eat about half the hay they’re fed, Force says. The current way of baling hay requires significant resources including specialized equipment and manual labor. Iron Goat’s system produces feed at lower costs, and the equipment can be rented out.</p>
// </li>
// </ul>
// <p/>
// <p/>
// </div>
// </body>
// </html>`);


// // console.log("aaaa");
// console.log(frag.childNodes.length);
// for (var index = 0; index < frag.childNodes.length; index++) {
// // console.log("index :  " + index);
// 	var element = frag.childNodes[index];
// 	console.log("element : " + element.innerHTML );
// }



// var req_url = 'http://spectrum.ieee.org/rss/fulltext';

// request({uri: req_url}, function(error, response, body){

// 	if(!error && response.statusCode == 200){
// 		var window = jsdom.jsdom(body).createWindow();
// 		text = window.document.text
// 		// var temp = window.document.getElementsByClassName('u-eng')[0].innerHTML;
// 		console.log(text);
// 	}
// });



// const options = new JSDOM(``, {
//   url: "http://spectrum.ieee.org/rss/fulltext",
//   referrer: http://spectrum.ieee.org/rss/fulltext",
//   contentType: "text/html",
//   userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0",
//   includeNodeLocations: true
// });


// const options = {
//   userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0"
// };

// JSDOM.fromURL("http://spectrum.ieee.org/rss/fulltext", options).then(dom => {
//     var text = '';
//     // console.log(dom.serialize());
//     // console.log(dom.window.document.querySelector("description").textContent);
//     console.log(dom.window.document.querySelector("guid").textContent);



    // JSDOM.querySelector(body)

    // var doc = dom.window.Document;
    // console.log( JSDOM.querySelector("body"));

    // var myTitle =doc.getElementById("description").innerHTML;
    // var window = jsdom.jsdom(body).createWindow();
    // text = window.document.text

//   console.log("myTitle : " + myTitle);





// });




// private static String extractDescriptionTextFromHtml(String html) {
// 		Document htmldoc = Jsoup.parse(html);
// 		String strContent = html;
// 		Elements elms = htmldoc.children();
// 		if (elms != null && elms.size() > 0) {
// 			strContent = elms.text();
// 		}
// 		if (log.isDebugEnabled()) {
// 			//log.debug("Description Text content after the extract : " + strContent);
// 		}
// 		return strContent;
// 	}