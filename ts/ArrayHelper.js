"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper(arr) {
        this.arr = arr;
    }
    ArrayHelper.prototype.take = function (arr, n) {
        if (n >= arr.length)
            return arr;
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    };
    ArrayHelper.prototype.shuffle = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var index = this.getRandomIndex(0, arr.length);
            var temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
        return arr;
    };
    ArrayHelper.prototype.getRandomIndex = function (min, max) {
        var dec = max - min;
        return Math.floor(Math.random() * dec + min);
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;
