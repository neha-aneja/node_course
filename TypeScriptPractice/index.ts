import {User} from './User';
import {Company} from './Company';
import { CustomMap } from './CustomMap';

// new CustomMap('map');
const customMap = new CustomMap('map');
// console.log(customMap);

const user = new User();
customMap.addMarker(user);
const company = new Company();
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

