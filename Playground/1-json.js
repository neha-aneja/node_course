const fs = require('fs');
const book = {
    title: "abc",
    author: "xyz"
}

const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
//console.log(dataBuffer.toString());
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
data.age = 20;
const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON)
// console.log(data);

// console.log(bookJSON);

// const parsedData =  JSON.parse(bookJSON);
// console.log(parsedData.author);