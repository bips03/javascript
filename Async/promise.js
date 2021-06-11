
console.log("Start")


function userInfo(email,pass){

    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve({myEmail : email,myPass:pass}) //resolve of promise
        },2000)
    })
    
}

function emailDetails(email){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve ({title : 'This is the email of user',emailDetails : email})
    
        },4000)
    })
}

// this is real world where the response is usually a promise so we have 2 possibilites
// that is true or false
// so promise makes it easy to do our intention without defining the function again n again
userInfo("biplab","mazumdar")
.then( (res) => {
    console.log(res)
    return emailDetails(res.myEmail)
}

            // I could do a console log here if I want but 
  )                          //since I need emailDetails from prev result will call another functio)
.then( (details) => {console.log(details)})



console.log("End")

