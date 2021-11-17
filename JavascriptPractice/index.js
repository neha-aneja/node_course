console.log("hey");

var names = ['abc', 'xyz', 'pqr'];
console.log(names.indexOf('xyz'));

var names = ['abc', 'xyz', 'pqr'];
console.log(names.indexOf('pqr', 1));

var names = ['abc', 'xyz', 'pqr'];
console.log(names.lastIndexOf('abc'));

var names = ['abc', 'xyz', 'pqr'];
console.log(names.includes('xyz'));

var names = ['abc', 'xyz', 'pqr'];
console.log(names.includes('xyz', 2));

const prices = [100,200,350,400,500];
const findElem = prices.find((e) => {
    return e>350;
})
console.log(findElem);

// const findElem = prices.findIndex((e) => e > 350);
console.log( prices.findIndex((e) => e > 350) );

console.log( prices.filter((e) => e < 350) );

const months = ['mar', 'jan', 'dec', 'apr', 'sep'];
console.log(months.sort());

const numbers = [ 1, 567, 10000, 23, 789];
console.log(numbers.sort());

const days = ['sun', 'mon', 'tue', 'wed', 'thu'];
days.push('fri', 'sat');
console.log(days);

const day = ['sun', 'mon', 'tue', 'wed', 'thu'];
const count = day.push('fri', 'sat');
console.log(day);
console.log(count);

const dish = ['magie', 'noodles'];
dish.unshift('yippie');
console.log(dish);


const dishes = ['samosa', 'kachori', 'pasta'];
dishes.pop()
console.log(dishes);
console.log(dishes.shift());
console.log(dishes);

const dishe = ['samosa', 'kachori', 'pasta'];
const dishNew = dishe.splice(2, 0, 'soup');
console.log(dishe);
console.log(dishNew);

const cars = ['maruti', 'suzuki', 'tata'];
// const newCar = cars.splice(1,1,'SUZUKI');
// console.log(cars);
const indexOfCar = cars.indexOf('suzuki');
if(indexOfCar != -1) {
    const newCar = cars.splice(indexOfCar,1,'SUZUKI');
    console.log(cars);
} else {
    console.log('no data');
}

const newCars = cars.splice(indexOfCar,1);
console.log(cars);
console.log(newCars);

// const arr = [1, 4, 9, 13, 27];
// const newArr = arr.map((e, i, a) => {
//     return `elem is ${e} index is ${i} array is ${a} `
// }).filter((e) => e > 9).reduce((a, e) => { return a += e });
// console.log(newArr);


const value = "name is \*'neha'";
console.log(value.length);
console.log(value);
console.log(value.indexOf('is'));
console.log(value.lastIndexOf('is', 7));

const string = 'hey there';
console.log(string.slice(0,2));
console.log(string.slice(3,-3));
console.log(string.substring(5));
console.log(string.substring(5, -2));
console.log(string.substr(5, 2));
console.log(string.substr(-3));

const str = 'how are you are';
console.log(str.replace('are', 'Are'));
console.log(str.charAt(1), str.charCodeAt(1));

const val = '   neha  aneja';
console.log(val.toUpperCase());
console.log(val.toLocaleLowerCase());
console.log(val.concat(" "+str));
console.log(val.trim());
console.log(val.split(" "));
