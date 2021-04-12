var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');

console.log(text);