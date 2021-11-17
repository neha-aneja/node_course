"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var metaDataKeys_1 = require("./metaDataKeys");
function use(middleWare) {
    return function (target, key, desc) {
        var middleWares = Reflect.getMetadata(metaDataKeys_1.MetaDataKeys.middleWare, target, key) || [];
        Reflect.defineMetadata(metaDataKeys_1.MetaDataKeys.middleWare, __spreadArray(__spreadArray([], middleWares, true), [middleWare], false), target, key);
    };
}
exports.use = use;
