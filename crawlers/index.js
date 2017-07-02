const path = require("path");
const logger = require("winston");
const crawler = require(path.resolve("src/crawler.js"));

const inputs = "askreddit;worldnews;cats";

crawler.getData(inputs.split(";"), function(results) {
	logger.info("Done with " +  results.length + " results");
});