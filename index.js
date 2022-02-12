const path = require("path")

console.log("filename is", __filename)
console.log("directory name is",__dirname);
console.log("basename is", path.basename(__filename))
console.log("basename dir is", path.basename(__dirname))
console.log("extension is", path.extname(__filename))
console.log(" dir is", path.dirname(__filename))
console.log(" after parsing ", path.parse(__filename))

//join

console.log(path.join(__dirname, "test", "test.js"));


//Working with file systems
const fs = require('fs')

fs.readFile(path.join(__dirname, "hello.txt"), (err, data) => {
    if (err) {
        console.log("error", err)
        return
    }

    console.log("data",data.toString())
})



