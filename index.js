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


//Working with url

const u = new URL("https://www.masaischool.com?q=1&s=2&t=3")
u.searchParams.append("page",4)
console.log("url is", u.toString());
console.log("searchparams",u.searchParams);

//Setting up a serer and changing the html page dynamicaly


const http = require('http')
const https=require('https')
const server = http.createServer((req, res) => {
    if (req.url == '/' && req.method == "GET") {
      handleHomePage(req,res)
    }
    
    if (req.method == "GET" && req.url == "/users/1") {
        handleUserPage(req,res,1)
    }
})


const handleHomePage = (req, res) => {
    fs.readFile(path.join(__dirname, "template", "index.html"),"utf8", (err, data) => {
        if (err) {
            console.log("error",err);
            return
        }
let template=data
        const options = {
            title: "Custom Template",
            name: "Ayush",
            welcome_msg:"Hey! bro gotta go the distance bro"
        }
        console.log("template is",template);

        for (let key in options) {
            let value = options[key];
           template= template.replace(`{${key}}`,value)
}
        res.writeHead(200)
        res.end(template)
    console.log("templatedata",template.toString());
        
  })  
}

const handleUserPage = (req,res,id) => {
    fs.readFile(path.join(__dirname, "template", "user.html"), "utf8", (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("Something went wrong")
            return
        }
        console.log(data.toString());
        https.get('https://reqres.in/api/users/' + id, (httpResponse) => {
            console.log(httpResponse.statusCode);
            let resdata=''
            httpResponse.on('data', (chunk) => {
              resdata+=chunk  
            })

            httpResponse.on('end', () => {
                console.log(resdata);
                const response = JSON.parse(resdata);
                console.log(response);

                const options = {
                    name:response.data.first_name + response.data.last_name,
                    img_src:response.data.avatar ,
                    email:response.data.email
                }
let template=data
                for (let key in options) {
                    let value = options[key]
                    template=template.replace(`{${key}}`,value)
                }

                res.writeHead(200);
                res.end(template)
            })
        })
        
    })
}

server.listen(4000, () => {
    console.log("listening to port 4000");
})

