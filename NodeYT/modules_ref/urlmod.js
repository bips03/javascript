const url = require('url')
const urlObj = new URL('https://twitter.com/search?q=Canada&src=trend_click&vertical=trends');

//url string
console.log(urlObj.href)

//host
console.log(urlObj.host)

//hostname
console.log(urlObj.hostname)

//pathname
console.log(urlObj.pathname)

//search part
console.log(urlObj.search)

// search queries object
console.log(urlObj.searchParams)

// append k-v pair to search queries
urlObj.searchParams.append('myKey','myVal')

console.log(urlObj.searchParams)

// iterate through each
urlObj.searchParams.forEach( (val,name) => {
    if(name==='q')
    console.log(` the key : ${name} -> the val ${val}`)
})
