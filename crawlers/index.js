const path = require("path");
const logger = require("winston");
const crawler = require(path.resolve("src/crawler.js"));

const inputs = "askreddit;worldnews;cats";

crawler.getData(inputs.split(";"), function(results) {

	results.forEach(function(item) {
		logger.info("Item -> ", item);
	});
});