
const higherOrderFunction = (callback) => {
    const teacher = {
        name: 'Jon',
        humour: 'bad'
    }

    setTimeout(() => {
        teacher.humour = 'good'
        // console.log('inside',teacher.humour)
        callback(teacher)
    }, 1000)

    // console.log(teacher.humour)
}

const callbackFunc = (teacher) => {
    console.log('inside callback', teacher.humour)
}


higherOrderFunction(callbackFunc)





// setTimeout(() => {
//     console.log(teacher.humour)
// },1100)