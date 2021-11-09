
const array = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81]

const sortedArray = array.sort()

console.log('sorted array', sortedArray)

const sleepSort = (arr) => {
    for( const num of arr) {
        setTimeout(() => console.log(num), num)
    }
}

sleepSort(array)