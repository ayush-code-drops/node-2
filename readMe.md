
**Aschncronous code is non blocking in nature while synchronous code is blocking. What that essentially means is, if you are reading/writing a file that takes time, the syncronous code won't allow next lines of code to execute until it gets completed.**


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


