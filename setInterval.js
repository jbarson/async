let iteration = 0

const intervalId = setInterval(() => {
    console.log(`the current interation is ${iteration++} and the id is ${intervalId}`)
    if(iteration === 10) clearInterval(intervalId)
}, 1000)

// if(iteration === 10) clearInterval(intervalId)

