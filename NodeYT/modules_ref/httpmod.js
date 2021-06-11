const http = require("http");
const fs = require('fs').promises
const path = require('path')


const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    
       fs.readFile('./index.html','utf-8')
       .then((fileData) => {
        res.write(fileData + req.rawHeaders)
        res.end()
       })
     
}); 


server.listen(4000, () => {
  console.log('Server running at port 4000')
})