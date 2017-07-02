"use strict";

const path = require("path");
const logger = require("winston");
const constants = require(path.resolve("src/util/constants.js"));

const redditUtil = {

	checkAndValidateUrl: function(strURL) {
		return strURL.startsWith(constants.reddit.searchPrefix) ?
			(constants.reddit.sitePrefix + strURL) : strURL;
	},

	createObject: function(points, title, url) {
		var result = null;

		logger.info("Attempt create object with params", { points: points, title: title, url: url });

		try {
			result = {
				points: parseInt(points),
				title: title,
				url: redditUtil.checkAndValidateUrl(url)
			};
			logger.info("Object created", { points: points, title: title, url: url });
		} catch (ex) {
			logger.warn("Invalid params when create object", { points: points, title: title, url: url });
		}

		return result;

	}

};

module.exports = redditUtil;