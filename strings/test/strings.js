const path = require("path"),
	OS = require("os"),
	stringUtils = require(path.resolve("src/util/strings.js")),
	assert = require("chai").assert;

describe("String Utils", function() {

	const text = "Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.";

	it("should get array with chunkStringWithArray", function(done) {

		const _result = stringUtils.chunkStringWithArray(text, 10);
		assert.isArray(_result);
		done();

	});

	it("should get empty array when use empty string to chunkStringWithArray", function(done) {

		const _result = stringUtils.chunkStringWithArray("", 10);
		assert.isArray(_result);
		assert.ok(_result.length == 0);
		done();

	});

	it("should obtain array with length 36 when use length 10 to chunkStringWithArray", function(done) {

		const _result = stringUtils.chunkStringWithArray(text, 10);
		assert.ok(_result.length == 36);
		done();

	});

	it("should get string with chunkString", function(done) {

		const _result = stringUtils.chunkString(text, 10);
		assert.isString(_result);
		assert.ok(_result !== text);
		assert.include(_result, OS.EOL, 'String contains new line char');
		done();

	});


});