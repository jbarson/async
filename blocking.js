const stop = 100000

console.time('blocking')

console.log(`before`)

for(let i = 0; i< stop; i++) {
    console.log(new Date())
}
console.log('after')
console.timeEnd('blocking')
