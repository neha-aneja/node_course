"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
// new CustomMap('map');
var customMap = new CustomMap_1.CustomMap('map');
// console.log(customMap);
var user = new User_1.User();
customMap.addMarker(user);
var company = new Company_1.Company();
customMap.addMarker(company);
// console.log(user);
// console.log(company);
// new google.maps.Map(document.getElementById('map'), {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// });
