"use strict";

const OS = require("os");

const stringsUtil = {

	chunkStringWithArray: function (str, len) {
		var _size = Math.ceil(str.length / len),
			_ret = new Array(_size),
			_offset
			;

		for (var _i = 0; _i < _size; _i++) {
			_offset = _i * len;
			_ret[_i] = str.substring(_offset, _offset + len);
		}

		return _ret;
	},

	chunkString: function (str, len) {
		return stringsUtil.chunkStringWithArray(str, len).join(OS.EOL);
	}
};

module.exports = stringsUtil;