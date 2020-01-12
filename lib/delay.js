"use strict";
exports.__esModule = true;
exports.delay = function (ms) {
    return new Promise(function (r) { return setTimeout(r, ms); });
};
