const students = ['Nico', 'Jang', 'Robert', 'Todd']

const myForEach = (arr, callback) => {
    for (const element of arr) {
        callback(element)
    }
}

const callbackFunc = item => console.log(item)

//myForEach(students, callbackFunc)
//with anonymous function
myForEach(students, item => console.log(item))