var fs = require("fs");

try{
    fs.unlinkSync("./lib/removingFile.json");
} catch(err) {
    console.log(err);
}

fs.unlink("./lib/nextRemovingFile.md", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File has been successfully removed.");
    }
});
