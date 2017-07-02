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

		try {
			result = {
				points: parseInt(points),
				title: title,
				url: redditUtil.checkAndValidateUrl(url)
			};

		} catch (ex) {
			logger.warn("Invalid params when create object", { points: points, title: title, url: url });
		}

		return result;

	}

};

module.exports = redditUtil;