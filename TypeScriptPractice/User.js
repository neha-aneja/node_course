"use strict";
exports.__esModule = true;
exports.User = void 0;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName();
        // console.log(this.location);
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    User.prototype.markerContent = function () {
        return "User name: " + this.name;
    };
    return User;
}());
exports.User = User;
