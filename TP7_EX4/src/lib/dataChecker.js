"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhmerDate = void 0;
var khmerNumberConverter_js_1 = require("./khmerNumberConverter.js");
var KhmerDate = /** @class */ (function () {
    function KhmerDate(date) {
        this.date = date;
    }
    KhmerDate.prototype.getDate = function () {
        return this.date;
    };
    KhmerDate.prototype.getRelativeTime = function () {
        var now = new Date();
        //msAgo = the current time - the input time
        var msAgo = now.getTime() - this.date.getTime();
        if (msAgo < 60 * 1000) {
            return "\u1798\u17BB\u1793\u1793\u17C1\u17C7\u1794\u1793\u17D2\u178F\u17B7\u1785";
        }
        else if (msAgo < 60 * 60 * 1000) {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (60 * 1000))), " \u1793\u17B6\u1791\u17B8\u1798\u17BB\u1793");
        }
        else if (msAgo < 24 * 60 * 60 * 1000) {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (60 * 60 * 1000))), " \u1798\u17C9\u17C4\u1784\u1798\u17BB\u1793");
        }
        else if (msAgo < 7 * 24 * 60 * 60 * 1000) {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (24 * 60 * 60 * 1000))), " \u1790\u17D2\u1784\u17C3\u1798\u17BB\u1793");
        }
        else if (msAgo < 30 * 24 * 60 * 60 * 1000) {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (7 * 24 * 60 * 60 * 1000))), " \u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD\u1798\u17BB\u1793");
        }
        else if (msAgo < 365 * 24 * 60 * 60 * 1000) {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (30 * 24 * 60 * 60 * 1000))), " \u1781\u17C2\u1798\u17BB\u1793");
        }
        else {
            return "".concat((0, khmerNumberConverter_js_1.convertToKhmerNumber)(Math.floor(msAgo / (365 * 24 * 60 * 60 * 1000))), " \u1786\u17D2\u1793\u17B6\u17C6\u1798\u17BB\u1793");
        }
    };
    return KhmerDate;
}());
export { KhmerDate };


//this code is error 
//have to copy from ex4 in order to make it works