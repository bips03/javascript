
console.log("Start")


function userInfo(email,pass,resolve,reject){
setTimeout(()=>{
    
    resolve({myEmail : email,myPass:pass}) //resolve of promise
     
},2000)
}

function emailDetails(email,resolve){
    setTimeout(()=> {
        resolve ({title : 'This is the email of user',emailDetails : email})

    },4000)
}

// if we store return seperatly of async with random time
// we will get undefined
// so have 2 functions so once timeout is done it will call the function
// this is done manually and nested will make it complex
userInfo("biplab","mazumdar", (res) => {
    console.log(res)
    emailDetails(res.myEmail, (det) => {
        console.log('got data')
        console.log(det)
    })
    
},(err) => {
    console.log(err)
})



console.log("End")