const path = require("path"),
	redditUtils = require(path.resolve("src/util/reddit.js")),
	constants = require(path.resolve("src/util/constants.js")),
	assert = require("chai").assert;

describe("Reddit Utils", function() {

	it("should get full URL to search using mountURL method", function(done) {

		const _term = "brazil";
		const _expected = constants.reddit.sitePrefix + "/r/" + _term;
		const _result = redditUtils.mountURL(_term);

		assert.isString(_result);
		assert.ok(_result === _expected);
		done();

	});

	it("should get reddit full URL to search using checkAndValidateUrl with search term", function(done) {

		const _param = "/r/er";
		const _expected = constants.reddit.sitePrefix + _param;
		const _result = redditUtils.checkAndValidateUrl(_param);

		assert.isString(_result);
		assert.ok(_result === _expected);
		done();

	});

	it("should get same URL using checkAndValidateUrl with non-reddit url", function(done) {

		const _param = "http://google.com/";
		const _expected = _param;
		const _result = redditUtils.checkAndValidateUrl(_param);

		assert.isString(_result);
		assert.ok(_result === _expected);
		done();

	});

	it("should create object with valid parameters using createObject method", function(done) {

		const _result = redditUtils.createObject(10, "title", "/r/lplp");

		assert.isObject(_result);
		assert.property(_result, 'points');
		assert.property(_result, 'title');
		assert.property(_result, 'url');

		done();

	});

	it("should not create object with invalid parameters using createObject method", function(done) {

		const _resultOne = redditUtils.createObject("&bull;", "title", "/r/lplp");
		const _resultTwo = redditUtils.createObject("&bull;", null, "/r/lplp");
		const _resultThree = redditUtils.createObject("&bull;", "title", null);

		assert.isNull(_resultOne);
		assert.isNull(_resultTwo);
		assert.isNull(_resultThree);


		done();

	});


});