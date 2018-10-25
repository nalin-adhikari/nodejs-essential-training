var fs = require("fs");

var contents = fs.readFileSync("./lib/newTestFile.txt", "UTF-8");

console.log(contents);