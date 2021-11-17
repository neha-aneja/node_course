"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var methods_1 = require("./methods");
var metaDataKeys_1 = require("./metaDataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(metaDataKeys_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(metaDataKeys_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(methods_1.Methods.get);
exports.put = routeBinder(methods_1.Methods.put);
exports.post = routeBinder(methods_1.Methods.post);
exports.del = routeBinder(methods_1.Methods.del);
exports.patch = routeBinder(methods_1.Methods.patch);
// export function post(path: string) {
//     return function(target: any, key: string, desc: PropertyDescriptor) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', post, target, key);
// };
// }
