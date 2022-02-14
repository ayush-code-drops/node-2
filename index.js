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

//Reading a file
fs.readFile(path.join(__dirname, "hello.txt"), (err, data) => {
    if (err) {
        console.log("error", err)
        return
    }

    console.log("data",data.toString())
})
//Writing a file
fs.writeFile(path.join(__dirname, "hello.txt"), "Ayush you need to focus bro", (err) => {
    if (err) {
        console.log(error);
        return
    } 
    
    console.log("writing file");
})

//Renaming a file

fs.rename(path.join(__dirname, "hello.txt"), path.join(__dirname,"hello7.txt"), (err) => {
    if (err) {
        return
    }
console.log("File Renamed");
})

//making a directory

fs.mkdir(path.join(__dirname, "tempdir"),(err)=> {
    if (err) {
        console.log("err", err);
        return
    }
console.log("directory created");
})

//Renaming a file

fs.rename(path.join(__dirname, "hello.txt"), path.join(__dirname,"tempdir","hello7.txt"), (err) => {
    if (err) {
        return
    }
console.log("File Renamed");
})


