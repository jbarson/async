const fs = require('fs')

//Synchronous version
//fs.readFileSync('./index.html', 'utf-8')
console.log(`I happen before`)
fs.readFile('./index.html', 'utf-8', (err, data) => {
    if(err) throw err
    console.log(data.toUpperCase().split(' '))
    console.log('I am inside')
    // return data
})
// console.log('what is this?', variable)
console.log('i happen after')
// console.log(fileContent)