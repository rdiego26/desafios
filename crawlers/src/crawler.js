"use strict";

const path = require("path");
const Crawler = require("crawler");
const logger = require("winston");
const redditUtil = require(path.resolve("src/util/reddit.js"));

const crawler = {

	objs: [],

	getData: function(arrayTerms, callback) {

		const instance = new Crawler({
			maxConnections : 10,
			jQuery: {
				name: 'cheerio',
				options: {
					normalizeWhitespace: true,
					xmlMode: true
				}
			},
			callback : function (error, res, done) {
				if(error) {
					logger.error("Error while crawling", error);
				} else {
					const $ = res.$;
					const votes = $("#siteTable div.thing");
					votes.each(function (idx, ele) {

						const _points = $(ele).children("div.midcol").children("div.unvoted").text();
						const _title = $(ele).children("div.entry").children("div.top-matter").children("p.title").children("a").text();
						const _url = $(ele).children("div.entry").children("div.top-matter").children("p.title").children("a").attr("href");
						const _obj = redditUtil.createObject(_points, _title, _url);

						if(_obj) {
							crawler.objs.push(_obj);
						}

					});
				}
				done();
			}
		});

		arrayTerms.each(function(item) {
			instance.queue(item);
		});

		instance.on('drain', function() {
			logger.info('Finished', {timestamp: Date.now()});
			callback(crawler.objs);
		});

	}

};

module.exports = crawler;