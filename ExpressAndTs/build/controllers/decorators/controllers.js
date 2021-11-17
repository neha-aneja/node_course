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
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var metaDataKeys_1 = require("./metaDataKeys");
// export const router = express.Router();
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('invalid');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send('invalid');
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(metaDataKeys_1.MetaDataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(metaDataKeys_1.MetaDataKeys.method, target.prototype, key);
            var middleWares = Reflect.getMetadata(metaDataKeys_1.MetaDataKeys.middleWare, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(metaDataKeys_1.MetaDataKeys.validator, target.prototype, key) || [];
            var validator = bodyValidator(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middleWares, false), [validator, routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
