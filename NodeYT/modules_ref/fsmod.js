const fs = require("fs").promises;
const path = require("path");

// make directory

// fs.mkdir(path.join(__dirname,'test'),{},err => {
//     if(err)
//     throw err
//     console.log('Directory Created')
// })

/*

// make file and write
fs.writeFile(path.join(__dirname,'test','test.txt'),'Hey Im loving json',err => {
    if(err)
    throw err
    console.log('File written')
}) 

// overwriting and appending
fs.writeFile(path.join(__dirname,'newtest','test.txt'),'This is overwriting with append', err => {
    if (err) throw err

    fs.appendFile(path.join(__dirname,'newtest','new.txt'),'\nthis is new text file', err => {
        if (err) throw err
        console.log('append successful')
    })

})

fs.rename(path.join(__dirname,'test'),path.join(__dirname,'newtest'), err => {
    if (err) throw err;
    console.log('rename succesful')
}) 

fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;
  console.log("Directory Created");
  fs.writeFile(
    path.join(__dirname, "test", "newfile.txt"),
    "this is new file created",
    (err) => {
      if (err) throw err;
      console.log("new file created");
    }
  );
});  

 async await

const createDir = async() => {

    try {
        await fs.mkdir(path.join(__dirname,'test'), {});
        await fs.writeFile('./test/file.txt','This is creating new file')
        await fs.appendFile('./test/file.txt',' Append this')
       
    } catch (error) {
        console.log(error)
    }
   
}  */

// promises way .then .catch

fs.mkdir('./test', {})
.then(() => {
    return fs.writeFile('./test/file.txt','This is promises file')
})
.catch( (err) => {
    console.log(' this is mkdir ' + err);
})
.then( () => {
    
    return fs.appendFile('./test/file.txt',' & This is append to promises file')
})
.catch( (err) => {
    console.log(' this is writeFile ' + err);
})
.then( () => {
    console.log('file appended')
})
.catch( (err) => {
    console.log(' this is appendFile ' + err);
})
