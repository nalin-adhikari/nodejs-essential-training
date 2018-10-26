var fs = require("fs");

// fs.renameSync("./assets/logs", "./logs");

// console.log("Directory moved.");

// fs.rmdir("./assets", function(err) {
//     if(err){
//         throw err;
//     }

//     console.log("Assets Directory Removed.");
// });

fs.readdirSync("./logs").forEach(function(fileName){
    fs.unlinkSync("./logs/"+fileName);
});

fs.rmdir("./logs", function(err){
    if(err){
        throw err;
    } else {
        console.log("Logs directory removed.");
    }
});