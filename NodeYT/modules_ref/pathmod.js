const path = require('path')

//Base file name
console.log(path.basename(__filename))


//Directory name
console.log(path.dirname(__filename))

//Extension
console.log(path.extname(__filename))

//Path object
console.log(path.parse(__filename))

//Joining files to directories
console.log(path.join(__dirname,'test.js'))  
