"use strict";

const path = require("path");
const logger = require("winston");
const constants = require(path.resolve("src/util/constants.js"));

const redditUtil = {

	checkAndValidateUrl: function(strURL) {
		return strURL.startsWith(constants.reddit.searchPrefix) ?
			(constants.reddit.sitePrefix + strURL) : strURL;
	},

	mountURL: function(term) {
		return constants.reddit.sitePrefix + "/r/" + term;
	},

	createObject: function(points, title, url) {
		var result = null;

		if(redditUtil.validateParams(points, title, url)) {
			result = {
				points: parseInt(points),
				title: title,
				url: redditUtil.checkAndValidateUrl(url)
			};
		} else {
			logger.warn("Invalid params when create object", { points: points, title: title, url: url });
		}

		return result;

	},

	validateParams: function(points, title, url) {
		const isValidPoint = typeof points === "number";
		const isValidTitle = typeof title === "string";
		const isValidUrl = typeof url === "string";

		return isValidPoint && isValidTitle && isValidUrl;
	}

};

module.exports = redditUtil;